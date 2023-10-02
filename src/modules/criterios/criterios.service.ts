import { Injectable } from '@nestjs/common';
import { CreateCriterioDto } from './dto/create-criterio.dto';
import { UpdateCriterioDto } from './dto/update-criterio.dto';
import { Criterio } from './entities/criterio.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CriteriosService {

  constructor(
    @InjectRepository(Criterio) private criterioRepository: Repository<Criterio>
  ){}

  create(createCriterioDto: CreateCriterioDto) {
    const data = this.criterioRepository.create(createCriterioDto)
    return this.criterioRepository.save(data)
  }

  findAll() {
    return this.criterioRepository.find()
  }

  findOne(id: number) {
    return this.criterioRepository.findBy({ id })
  }

  update(id: number, updateCriterioDto: UpdateCriterioDto) {
    const update = this.criterioRepository.create(updateCriterioDto)
    return this.criterioRepository.update({ id }, update)
  }

  remove(id: number) {
    return this.criterioRepository.delete({ id })
  }
}
