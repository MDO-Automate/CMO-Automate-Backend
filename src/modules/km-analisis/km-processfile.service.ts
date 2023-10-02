import { Injectable } from '@nestjs/common';
import * as xlsx from 'xlsx';

import { KmAnalisis } from './entities/km-analisis.entity';
import { getDataKm } from 'src/utils/getDataKM';
import { RutasDetailsService } from '../rutas/rutas-details.service';
import { getFormatHours } from 'src/utils/date';

@Injectable()
export class KmProcessFileService {
  constructor(private routeDetailsService: RutasDetailsService) {}

  async getProcessedData(file: any) {
    const data: KmAnalisis[] = this.getDataFromFile(file)
    return await this.averageRound(data)
  }

  getDataFromFile(file: any) {
    const workbook = xlsx.read(file.buffer, { type: 'buffer' })
    const sheetName = workbook.SheetNames[0]
    const sheet = workbook.Sheets[sheetName]
    const dataJson = xlsx.utils.sheet_to_json(sheet)
    return getDataKm(dataJson)
  }

  async averageRound(data: KmAnalisis[]) {
    const routeName = data[0].linea
    const newData = await this.getValidateData(data, `${routeName}`)
    return newData;
  }

 async getValidateData(data: KmAnalisis[], routeName: string){
    const minDistance = 500
    const date = data[0].inicioServicio.split(' ')[0]
    const { startRoute } = await this.routeDetailsService.getSchedulesByRoutAndDate(
      `${routeName}`,
      date,
    )
  
    return await Promise.all(
      data.map(async (item) => {
        const porcParada = parseInt(item.porcParada)
        const start = getFormatHours(item.inicioServicioEfectivo.split(' ')[1])
        const { name, media } = await this.routeDetailsService.getItineraryDistance(`${routeName}`,`${item.itinerario}`)

        let kmDistance = parseInt(`${item.distancia}`)
      
        //Validación de criterios
        if (kmDistance > 0 && porcParada < 5) {
          kmDistance = 0
          item = { 
            ...item, 
            distanciaYParadas: true 
          }
        }
        if (kmDistance < minDistance) {
          kmDistance = 0
          item = 
          { ...item, 
            minor500: true 
          }
        }
        if (kmDistance < media && porcParada > 99) {   
          kmDistance = media
          item = { 
            ...item, 
            distanciaYMedia: true 
          }
        }
        if(start < startRoute){
          item = { 
            ...item, 
            fueraHorario: true 
          }
        }

        //le asigna km1, km2, km3... dependiendo del itinerario.
        const kmItinerary = JSON.parse(`{ "${name}": ${ kmDistance } }`)
        return {
          ...item,
          ...kmItinerary,
          fecha: item.inicioServicio.split(' ')[0]
        }
      })
    )
  }

  
}
