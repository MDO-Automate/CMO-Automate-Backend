import { Injectable } from '@nestjs/common';
import { CreateInformeGeneralDto } from './dto/create-informe-general.dto';
import { UpdateInformeGeneralDto } from './dto/update-informe-general.dto';
import { InformeGeneral } from './entities/informe-general.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class InformeGeneralService {

  constructor(
    @InjectRepository(InformeGeneral) private informeGeneralRepository: Repository<InformeGeneral>
  ){}

  create(createInformeGeneralDto: CreateInformeGeneralDto) {
    const data = this.informeGeneralRepository.create(createInformeGeneralDto)
    return this.informeGeneralRepository.save(data)
  }

  findAll() {
    return this.informeGeneralRepository.find()
  }

  findOne(fecha: string) {
    return this.informeGeneralRepository.findBy({ fecha })
  }

  update(fecha: string, updateInformeGeneralDto: UpdateInformeGeneralDto) {
    const update = this.informeGeneralRepository.create(updateInformeGeneralDto)
    return this.informeGeneralRepository.update({ fecha }, update)
  }

  remove(fecha: string) {
    return this.informeGeneralRepository.delete({ fecha })
  }
}
