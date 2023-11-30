import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Ruta } from './entities/ruta.entity';
import { Repository } from 'typeorm';
import { CreateRutaDto } from './dto/create-ruta.dto';
import { UpdateRutaDto } from './dto/update-ruta.dto';

@Injectable()
export class RutasService {

  constructor(
    @InjectRepository(Ruta) private rutasRepository: Repository<Ruta>
  ){}
  
  findAll() {
    return this.rutasRepository.find()
  }

  findOne(id: number) {
    return this.rutasRepository.findBy({ id })
  }


  findOneByName(nombre: string) {
    return this.rutasRepository.findBy({ nombre })
  }

  async create(createRutaDto: CreateRutaDto) {
    const data = this.rutasRepository.create(createRutaDto)
    const rutasFound = await this.findOneByName(data.nombre)
    if (rutasFound.length > 0) {
      throw new BadRequestException("Ya existe una ruta con ese nombre");
    }
    return this.rutasRepository.save(data)
  }	


  async update(id: number, updateRutaDto: UpdateRutaDto) {
    const rutasFound = await this.findOne(id)
    if (rutasFound.length < 1) {
      throw new BadRequestException('No se encontró una ruta con ese ID')
    }
    const update = this.rutasRepository.create(updateRutaDto)
    try {
      this.rutasRepository.update({id}, update)
      return updateRutaDto
    } catch (err) {
      throw new BadRequestException(err);
      
    }
  }

  async remove(id: number) {
    const rutasFound = await this.findOne(id)
    if(rutasFound.length < 1){
      throw new BadRequestException ('No se encontró una ruta con ese ID.')
    }
    try {
      this.rutasRepository.delete({id})
      return {
        status: 200,
        message: `Se ha eliminado el ID: ${id}`
      }
    } catch (err) {
      throw new BadRequestException(err)
    }
  }
}