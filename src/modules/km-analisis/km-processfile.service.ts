import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as xlsx from 'xlsx';

import { KmAnalisis } from './entities/km-analisis.entity';
import { Itinerario } from '../itinerarios/entities/itinerario.entity';
import { getDataKm } from 'src/utils/getDataKM';
import { RutasService } from '../rutas/rutas.service';

@Injectable()
export class KmProcessFileService {
  constructor(
		private routeService: RutasService,
    @InjectRepository(Itinerario) private itinerarioRepository: Repository<Itinerario>,
  ) {}

  async getProcessedData(file: any) {
    const data: KmAnalisis[] = this.getDataFromFile(file);
    return await this.averageRound(data);
  }

  getDataFromFile(file: any) {
    const workbook = xlsx.read(file.buffer, { type: 'buffer' });
    const sheetName = workbook.SheetNames[0];
    const sheet = workbook.Sheets[sheetName];
    const dataJson = xlsx.utils.sheet_to_json(sheet);
    return getDataKm(dataJson);
  }

  async averageRound(data: KmAnalisis[]) {
		const routeName = data[0].linea
  	const routeDetails = await this.routeService.getRouteDetails(`${routeName}`)
		return routeDetails
  }
}
