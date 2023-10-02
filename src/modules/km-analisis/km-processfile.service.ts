import { Injectable } from '@nestjs/common';
import * as xlsx from 'xlsx';

import { KmAnalisis } from './entities/km-analisis.entity';
import { getDataKm } from 'src/utils/getDataKM';
import { RutasDetailsService } from '../rutas/rutas-details.service';

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
    const minDistance = 500

    const routeName = data[0].linea
    const date = data[0].inicioServicio.split(' ')[0]
    //const routeDetails = await this.routeDetailsService.getRouteDetails(`${routeName}`)

    const newData = await Promise.all(
      data.map(async (item) => {
        const { name, media } =
          await this.routeDetailsService.getItineraryDistance(
            `${routeName}`,
            `${item.itinerario}`,
          )
        const { startRoute, endRoute } =
          await this.routeDetailsService.getSchedulesByRoutAndDate(
            `${routeName}`,
            date,
          )

        console.log(startRoute, endRoute);

        const porcParada = parseInt(item.porcParada.replace('%', ''))
        let kmDistance = parseInt(`${item.distancia}`)

        if (kmDistance < minDistance) {
          kmDistance = 0;
          item = { ...item, minor500: true }
        }
        if (kmDistance > 0 && porcParada < 5) {
          kmDistance = 0;
          item = { ...item, distanciaYParadas: true }
        }
        if (kmDistance < media && porcParada > 99) {
          kmDistance = media;
          item = { ...item, distanciaYMedia: true }
        }
        const kmItinerary = JSON.parse(`{ "${name}": ${kmDistance} }`)
        return {
          ...item,
          ...kmItinerary,
          fecha: item.inicioServicio.split(' ')[0]
        }
      })
    )

    return newData;
  }
}
