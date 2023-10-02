import { Injectable } from '@nestjs/common';
import { CreateResumenElectricaDto } from './dto/create-resumen-electrica.dto';
import { UpdateResumenElectricaDto } from './dto/update-resumen-electrica.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ResumenElectrica } from './entities/resumen-electrica.entity';

@Injectable()
export class ResumenElectricaService {
  
  constructor(
    @InjectRepository(ResumenElectrica) private resumenElectRepository: Repository<ResumenElectrica>
  ){}

  create(createResumenElectricaDto: CreateResumenElectricaDto) {
    const data = this.resumenElectRepository.create(createResumenElectricaDto)
    return this.resumenElectRepository.save(data)
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
