import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateCriterioDto } from './dto/create-criterio.dto';
import { UpdateCriterioDto } from './dto/update-criterio.dto';
import { Criterio } from './entities/criterio.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CriteriosService {

  constructor(
    @InjectRepository(Criterio) 
    private criterioRepository: Repository<Criterio>
  ){}

  findAll() {
    return this.criterioRepository.find()
  }

  async findOne(id: number) {
    return await this.criterioRepository.findBy({ id })
  }

  async findByName(nombre: string) {
    const criterios = this.criterioRepository.find({ where: { nombre } })
    return criterios
  }

  async create(createCriterioDto: CreateCriterioDto) {
    const create = this.criterioRepository.create(createCriterioDto)
    const criteriosFound = await this.findByName(create.nombre)
    if (criteriosFound.length > 0) {
      throw new BadRequestException('Ya existe un criterio con ese nombre')
    }
    return this.criterioRepository.save(create)
  }

  async update(id: number, updateCriterioDto: UpdateCriterioDto) {
    const criteriosFound = await this.findOne(id)
    if (criteriosFound.length < 1) {
      throw new BadRequestException('No se encontró un criterio con ese ID')
    }
    const update = this.criterioRepository.create(updateCriterioDto)
    try {
      this.criterioRepository.update({ id }, update)
      return updateCriterioDto
    } catch (err) {
      throw new BadRequestException(err)
    }
  }

  async remove(id: number) {
    const criteriosFound = await this.findOne(id)
    if (criteriosFound.length < 1) {
      throw new BadRequestException('No se encontró un criterio con ese ID');
    }
    try {
      this.criterioRepository.delete({id})
      return {
        status: 200,
        message: `Se ha borrado el criterio con ID: ${id}`
      }
    } catch (err) {
      throw new BadRequestException(err)
    }
  }
}
