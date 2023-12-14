import { Injectable } from '@nestjs/common';
import { CreateInformeGeneralDto } from './dto/create-informe-general.dto';
import { InformeGeneral } from './entities/informe-general.entity';
import { Between, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { RutasService } from '../rutas/rutas.service';
import { firstDayOfMonth, getFormatStringDate, lastDayOfMonth } from '@utils/date';
import { getDataKmByItinerary } from '@utils/getDataKm';
import { IResumenElectrica } from '@models/resumenElectrica';
import { KmAnalisis } from '@models/kmAnalisis';
import { UpdateGeralDataDtoArray } from './dto/update-general-data.dto';
import { ResumenElectricaService } from '../resumen-electrica/resumen-electrica.service';


@Injectable()
export class InformeGeneralService {

  constructor(
    private rutaService: RutasService,
    private resumenElectricaService: ResumenElectricaService,
    @InjectRepository(InformeGeneral) private informeGeneralRepository: Repository<InformeGeneral>
  ){}

  async create(createInformeGeneralDto: CreateInformeGeneralDto) {
    const data = this.informeGeneralRepository.create(createInformeGeneralDto)

    const line = await this.rutaService.findOneByName(`${data.linea}`)
    const dataSave = {
      ...data,
      fecha: getFormatStringDate(data.fecha),
      linea: line[0]
    }
    return this.informeGeneralRepository.save(dataSave)
  }

  findAll() {
    return this.informeGeneralRepository.find()
  }

  findOne(fecha: string) {
    return this.informeGeneralRepository.findBy({ fecha })
  }

  getGeneralSummary(data: KmAnalisis[], kmElectric: IResumenElectrica){
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

  findByMonthAndRoute(fecha: string, route: string){
    const startDate = firstDayOfMonth(fecha)
    const endtDate = lastDayOfMonth(fecha)
    const whereOptions = {
      fecha: Between(startDate, endtDate),
      linea: route
    }
    return this.informeGeneralRepository
    .createQueryBuilder('km')
    .innerJoinAndSelect('km.linea', 'l',   'l.id  = km.linea')
    .where(whereOptions)
    .getMany()
  } 

  async update(updateInformeGeneralDto: UpdateGeralDataDtoArray) {
    const data: any = updateInformeGeneralDto.data
    const electricData = this.resumenElectricaService.getElectricSummary(data)
    const generalSummaryData: any = this.getGeneralSummary(data, electricData)
    const line = await this.rutaService.findOneByName(`${data[0].linea}`)

    const dataUpdate = {
      ...generalSummaryData,
      linea: line[0]
    }
    
    const update: any = this.informeGeneralRepository.create(dataUpdate)
    await this.informeGeneralRepository.update({ fecha: data[0].fecha, linea: line[0] }, update)
    return this.findByMonthAndRoute(data[0].fecha, `${line[0].id}`)
  }

  remove(fecha: string) {
    return this.informeGeneralRepository.delete({ fecha })
  }
}
