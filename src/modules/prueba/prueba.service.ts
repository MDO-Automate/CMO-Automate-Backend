import { Injectable } from '@nestjs/common';
import { CreatePruebaDto } from './dto/create-prueba.dto';
import { UpdatePruebaDto } from './dto/update-prueba.dto';
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { Prueba } from './entities/prueba.entity';

@Injectable()
export class PruebaService {
  constructor(@InjectRepository(Prueba) private pruebaRepository: Repository<Prueba>){}

  create(createPruebaDto: CreatePruebaDto) {
    const newPrueba = this.pruebaRepository.create(createPruebaDto)
    return this.pruebaRepository.save(newPrueba)
  }

  findAll() {
    return this.pruebaRepository.find();
  }

  findOne(id: number) {
    return  this.pruebaRepository.findBy({ id })
  }

  update(id: number, updatePruebaDto: UpdatePruebaDto) {
    const updatePrueba = this.pruebaRepository.create(updatePruebaDto)
    return this.pruebaRepository.update({ id }, updatePrueba)
  }

  remove(id: number) {
    return this.pruebaRepository.delete(id);
  }
}
