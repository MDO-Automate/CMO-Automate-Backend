import { Injectable } from '@nestjs/common';
import { CreateInformeGeneralDto } from './dto/create-informe-general.dto';
import { UpdateInformeGeneralDto } from './dto/update-informe-general.dto';
import { InformeGeneral } from './entities/informe-general.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { RutasService } from '../rutas/rutas.service';

@Injectable()
export class InformeGeneralService {

  constructor(
    private rutaService: RutasService,
    @InjectRepository(InformeGeneral) private informeGeneralRepository: Repository<InformeGeneral>
  ){}

  async create(createInformeGeneralDto: CreateInformeGeneralDto) {
    const data = this.informeGeneralRepository.create(createInformeGeneralDto)
    const line = await this.rutaService.findOneByName(`${data.linea}`)
    const dataSave = {
      ...data,
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

  update(fecha: string, updateInformeGeneralDto: UpdateInformeGeneralDto) {
    const update = this.informeGeneralRepository.create(updateInformeGeneralDto)
    return this.informeGeneralRepository.update({ fecha }, update)
  }

  remove(fecha: string) {
    return this.informeGeneralRepository.delete({ fecha })
  }
}
