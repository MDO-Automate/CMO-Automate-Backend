import { Injectable } from '@nestjs/common';
import { CreateItinerarioDto } from './dto/create-itinerario.dto';
import { UpdateItinerarioDto } from './dto/update-itinerario.dto';
import { Itinerario } from './entities/itinerario.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ItinerariosService {

  constructor(
    @InjectRepository(Itinerario) private itinerarioRepository: Repository<Itinerario>
  ){}
 
  create(createItinerarioDto: CreateItinerarioDto) {
    const data = this.itinerarioRepository.create(createItinerarioDto)
    return this.itinerarioRepository.save(data)
  }

  findAll() {
    return this.itinerarioRepository.find();
  }

  findOne(id: number) {
    return  this.itinerarioRepository.findBy({ id });
  }

  update(id: number, updateItinerarioDto: UpdateItinerarioDto) {
    const update = this.itinerarioRepository.create(updateItinerarioDto)
    return this.itinerarioRepository.update( { id } , update)
  }

  remove(id: number) {
    return this.itinerarioRepository.delete({ id })
  }
}
