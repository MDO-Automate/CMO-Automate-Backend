import * as xlsx from 'xlsx'
import { BadRequestException, Injectable } from '@nestjs/common'


import { KmAnalisis }     from '@models/kmAnalisis'
import { getDataKm }      from '@utils/getDataKm'

import { RutasDetailsService }      from '../../rutas/rutas-details.service'
import { getDataObjectSortDesc }    from '@utils/getDataSortDesc'
import { ResumenElectricaService }  from '../../resumen-electrica/resumen-electrica.service'
import { InformeGeneralService } from '../../informe-general/informe-general.service'
import { CalculateCriteriosService } from '../../criterios/calculate-criterios.service'


@Injectable()
export class KmProcessFileService {
  constructor(
    private routeDetailsService: RutasDetailsService,
    private resumenElectricaService: ResumenElectricaService,
    private informeGeneralService: InformeGeneralService,
    private calculateCriteriosService: CalculateCriteriosService
  ) {}

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
    const summaryElectricData = this.resumenElectricaService.getElectricSummary(averageRoundData)
    const generalSummary = this.informeGeneralService.getGeneralSummary(averageRoundData,summaryElectricData)
   
    return {
      analisisKm : averageRoundDataSort,
      resumenElec: [ summaryElectricData ],
      resumenGeneral: [ generalSummary ]
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
    return await this.validateData(data, routeName)
  }

  async validateData(data: KmAnalisis[], routeName:string,){

    return await Promise.all(
      data.map(async (item) => {
        const { name, media } = await this.routeDetailsService.getItineraryDistance(`${routeName}`,`${item.itinerario}`)
        const date = item.inicioServicio.split(' ')[0]
  
        item.kmDistance = parseInt(`${item.distancia}`)

        item = await this.calculateCriteriosService.circulationWrong(item)
        item = await this.calculateCriteriosService.differenceItineraryEndHour(item)
        item = await this.calculateCriteriosService.minor500(item)
        item = await this.calculateCriteriosService.DGreater0AndPercStopMinorFive(item)
        item = await this.calculateCriteriosService.DGreaterAverageAndDGreaterAverageAbove200(item, media)
        item = await this.calculateCriteriosService.DMinorAverageAndPercStopGreater99(item, media)

        item = { ...item, media }

        //le asigna km1, km2, km3... dependiendo del itinerario.
        const kmItinerary = JSON.parse(`{ "${name}": ${ item.kmDistance } }`)
        return {
          ...item,
          ...kmItinerary,
          fecha: date
        }
      })
    )
  }

}


