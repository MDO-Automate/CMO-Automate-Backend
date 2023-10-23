import { BadRequestException, Injectable } from '@nestjs/common'
import * as xlsx from 'xlsx'

import { KmAnalisis }     from '@models/kmAnalisis'
import { getDataKm, getDataKmByItinerary, getDataKmByVeh }      from '@utils/getDataKm'
import { getFormatHours } from '@utils/date'

import { RutasDetailsService } from '../rutas/rutas-details.service'
import { ResumenElectrica } from '@models/resumenElectrica'
import { getDataObjectSortDesc } from '@utils/getDataSortDesc'


@Injectable()
export class KmProcessFileService {
  constructor(private routeDetailsService: RutasDetailsService) {}

  getDataFromFile(file: any) {
    const workbook = xlsx.read(file.buffer, { type: 'buffer' })
    const sheetName = workbook.SheetNames[0]
    const sheet = workbook.Sheets[sheetName]
    const dataJson = xlsx.utils.sheet_to_json(sheet) //convierte la información del excel a json
    return getDataKm(dataJson)
  }

  async getProcessedData(file: any) {
    const data: KmAnalisis[] = this.getDataFromFile(file)
    const averageRoundData = await this.averageRound(data)
    const averageRoundDataSort = getDataObjectSortDesc(averageRoundData, 'distancia')
    const summaryElectricData = this.getSummaryElectric(averageRoundData)
    const generalSummary = this.getGeneralSummary(averageRoundData,summaryElectricData)
   
    return {
      analisisKm : averageRoundDataSort,
      resumenElec: [summaryElectricData],
      resumenGeneral: [generalSummary]
    }
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
    const overDistance = 200
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
        if(kmDistance > media && kmDistance < (media + overDistance)){
          kmDistance = media
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
        item = { ...item, media  }

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

  getSummaryElectric(data: KmAnalisis[]): ResumenElectrica{
    const vehicles = {
      mdo109: getDataKmByVeh(data, 'MDO-109'),
      mdo110: getDataKmByVeh(data, 'MDO-110'),
      mdo111: getDataKmByVeh(data, 'MDO-111'),
      mdo112: getDataKmByVeh(data, 'MDO-112')
    }
    const total = Object.keys(vehicles).reduce(
      (acumulator, item) =>  vehicles[item] + acumulator, 
      0
    )
    return({
      fecha: data[0].fecha,
      linea: data[0].linea,
      ...vehicles,
      totalM: total,
      totalKm: total / 1000
    })
  }

  
  getGeneralSummary(data: KmAnalisis[], kmElectric: ResumenElectrica){
    const fecha = data[0].fecha
    const linea = data[0].linea
    const itineraries = {
      itinerario1: getDataKmByItinerary(data, 'km1'),
      itinerario2: getDataKmByItinerary(data, 'km2'),
      itinerario3: getDataKmByItinerary(data, 'km3'),
      itinerario4: getDataKmByItinerary(data, 'km4')
    }

    const total = Object.keys(itineraries).reduce(
      (acumulator, item) =>  itineraries[item] + acumulator, 
      0
    )

    const totalT = data.reduce((acu, item) => +item.distancia + acu, 0)
    const flotaElect = kmElectric.totalKm
    const totalSinElect = total - flotaElect

    return({
      fecha,
      linea,
      ...itineraries,
      total,
      datos: data.length,
      totalT,
      flotaElect,
      totalSinElect
    });
  }

}


