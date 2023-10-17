import { BadRequestException, Injectable } from '@nestjs/common';
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
    const dataJson = xlsx.utils.sheet_to_json(sheet) //convierte la información del excel a json
    return getDataKm(dataJson)
  }

  async averageRound(data: KmAnalisis[]) {
    const routeName = data[0].linea
    const newData = await this.getValidatedData(data, `${routeName}`)
    return newData;
  }

 async getValidatedData(data: KmAnalisis[], routeName: string){
    const date = data[0].inicioServicio.split(' ')[0]
    const schedulesRoute = await this.routeDetailsService.getSchedulesByRoutAndDate(
      `${routeName}`,
      date,
    )

    if(!schedulesRoute){
      throw new 
        BadRequestException(
          `No se encontró información referente a la ruta ${routeName} para redondear a la media, 
          verifique que la información de la ruta se encuentre cargada.`
        )
    }
    return await this.validateData(data, routeName, schedulesRoute)
  }

  async validateData(data: KmAnalisis[], routeName:string, schedulesRoute: any){
    const minDistance = 500
    const { startRoute } = schedulesRoute

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
