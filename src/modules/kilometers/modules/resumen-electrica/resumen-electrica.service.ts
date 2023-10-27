import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { CreateResumenElectricaDto } from './dto/create-resumen-electrica.dto'
import { UpdateResumenElectricaDto } from './dto/update-resumen-electrica.dto'

import { ResumenElectrica } from './entities/resumen-electrica.entity'
import { RutasService } from '../rutas/rutas.service'
import { getFormatStringDate } from '@utils/date'
import { getDataKmByVeh } from '@utils/getDataKm'
import { KmAnalisis } from '@models/kmAnalisis'
import { IResumenElectrica } from '@models/resumenElectrica'


@Injectable()
export class ResumenElectricaService {
  
  constructor(
    private rutaService: RutasService,
    @InjectRepository(ResumenElectrica) private resumenElectRepository: Repository<ResumenElectrica>
  ){}

  getElectricSummary(data: KmAnalisis[]): IResumenElectrica{
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


  async create(createResumenElectricaDto: CreateResumenElectricaDto) {
    const data = this.resumenElectRepository.create(createResumenElectricaDto)
    const line = await this.rutaService.findOneByName(`${data.linea}`)
    const dataSave = {
      ...data,
      fecha: getFormatStringDate(data.fecha),
      linea: line[0]
    } 
    return this.resumenElectRepository.save(dataSave)
  }

  findAll() {
    return this.resumenElectRepository.find()
  }

  findOne(fecha: string) {
    return this.resumenElectRepository.findBy( { fecha })
  }

  update(fecha: string, updateResumenElectricaDto: UpdateResumenElectricaDto) {
    const update = this.resumenElectRepository.create(updateResumenElectricaDto)
    return this.resumenElectRepository.update( { fecha } ,update)
  }

  remove(fecha: string) {
    return this.resumenElectRepository.delete({  fecha  });
  }

}
