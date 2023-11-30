import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateItinerarioDto } from './dto/create-itinerario.dto';
import { UpdateItinerarioDto } from './dto/update-itinerario.dto';
import { Itinerario } from './entities/itinerario.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ItinerariosService {

  constructor(@InjectRepository(Itinerario) private itinerarioRepository: Repository<Itinerario>){}
 
  findAll() {
    return this.itinerarioRepository.find();
  }

  findOneByName(nombre: string) {
    return this.itinerarioRepository.findBy({ nombre });
  }

  findOne(id: number) {
    return this.itinerarioRepository.findBy({ id });
  }
  
  async create(createItinerarioDto: CreateItinerarioDto) {
    const create = this.itinerarioRepository.create(createItinerarioDto)
    const itinerariosFound = await this.findOneByName(create.nombre)
    if (itinerariosFound.length > 0) {
      throw new BadRequestException('Ya existe un itinerario con ese nombre')
    }
    return this.itinerarioRepository.save(create)
  }

  async update(id: number, updateItinerarioDto: UpdateItinerarioDto) {
    const itinerariosFound = await this.findOne(id)
    if (itinerariosFound.length < 1) {
      throw new BadRequestException('No se encontró un itinerario con ese ID')
    }
    const update = this.itinerarioRepository.create(updateItinerarioDto)
    try {
      this.itinerarioRepository.update({id}, update)
      return updateItinerarioDto
    } catch (err) {
      throw new BadRequestException(err)
    }
  }

  async remove(id: number) {
    const itinerariosFound = await this.findOne(id)
    if (itinerariosFound.length < 1) {
      throw new BadRequestException('No se encontró un itinerario con ese ID')
    }
    try {
      this.itinerarioRepository.delete({id})
      return {
        status: 200,
        message: `Se ha eliminado el ID: ${id}`
      }
    } catch(err) {
      throw new BadRequestException(err)
    }
  }
}
