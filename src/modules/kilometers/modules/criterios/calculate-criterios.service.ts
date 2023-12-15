import { Injectable } from '@nestjs/common';

import { HorariosIitinerarioService } from '../itinerarios/horarios-itinerarios.service';
import { KmAnalisis } from '@models/kmAnalisis';
import { differenceFiveMinutes, getDayType, getFormatDate } from '@utils/date';
import { CirculationService } from '../rutas/circulation.service';
import { FestivosService } from '../festivos/festivos.service';

@Injectable()
export class CalculateCriteriosService {
  constructor(
    private horariosIitinerarioService:   HorariosIitinerarioService,
    private circulationService:           CirculationService,
    private festivosService:              FestivosService
  ) {}

  async minor500(item: KmAnalisis) {
    const minDistance = 500

    if (item.kmDistance < minDistance) {
      item.kmDistance = 0;
      item = {
        ...item,
        minor500: true,
      }
    }

    return item;
  }

  async DGreaterAverageAndDGreaterAverageAbove200(
    item: KmAnalisis,
    average: number,
  ) {
    const overDistance = 200;
    if (item.kmDistance > average && item.kmDistance < average + overDistance) {
      item.kmDistance = average;
    }
    return item;
  }

  async DMinorAverageAndPercStopGreater99(item: KmAnalisis, average: number) {
    const porcParada = parseInt(item.porcParada);
    if (item.kmDistance < average && porcParada > 99) {
      item.kmDistance = average;
      item = {
        ...item,
        distanciaYMedia: true,
      };
    }

    return item;
  }

  async DGreater0AndPercStopMinorFive(item: KmAnalisis) {
    const porcParada = parseInt(item.porcParada);
    if (item.kmDistance > 0 && porcParada < 5) {
      item.kmDistance = 0;
      item = {
        ...item,
        distanciaYParadas: true,
      };
    }

    return item;
  }

  async differenceItineraryEndHour(item: KmAnalisis) {

    try{
      const service = this.horariosIitinerarioService;
    
      const currentDate = item.inicioServicio.split(' ')[0];
      const itinerary = await service.getEndHourByItineraryAndRoute(
        `${item.itinerario}`,
        `${item.linea}`,
      );
      const columnDay = {
        habil:  'lvFin',
        saturday: 'sFin',
        sunday: 'dFin',
        holidays: 'dFin',
      }
  
      const date = getFormatDate(currentDate)
      const typeDay = getDayType(date)
      const holiday = await this.festivosService.getByDate(currentDate)
      const typeDayName = holiday.length > 0 ? columnDay['holidays'] : columnDay[typeDay]
      const endHourItinerary = itinerary[0][typeDayName]
  
      const startServiceEfectiveHour = item.inicioServicioEfectivo.split(' ')[1]
  
  
      const difference = differenceFiveMinutes(
        endHourItinerary,
        startServiceEfectiveHour,
      )
  
      return {
        ...item,
        fueraHorario: difference,
      };

    }
    catch(e){
      return  {
        ...item,
        fueraHorario: false,
      };
    }

  }

  async circulationWrong(item: KmAnalisis) {
    const circulation = parseInt(`${item.ht.split('-')[1]}`);
    const circulationFounded =
      await this.circulationService.getCirculationByName(circulation);

    //Notifica si no se encuentra la circulación o si está mal enrutado
    return {
      ...item,
      malEnrutado: circulationFounded.length < 1,
    };
  }

  async changeWrongDate(item: KmAnalisis) {
    const endEfectiveServiceDate = item.finServicioEfectivo.split(' ')[0]
    const startServiceDate =  item.inicioServicio.split(' ')[0]

    //cambia la fecha de fin de servicio efectivo si es diferente a la de inicio servicio
    if (endEfectiveServiceDate !== startServiceDate) {
      const hour = item.finServicioEfectivo.split(' ')[1];
      item = {
        ...item,
        finServicioEfectivo: `${startServiceDate} ${hour}`,
      };
    }

    return item
  }
}
