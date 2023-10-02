import { Injectable } from '@nestjs/common';
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
  
  create(createRutaDto: CreateRutaDto) {
    const data = this.rutasRepository.create(createRutaDto)
    return this.rutasRepository.save(data)
  }	

  findAll() {
    return this.rutasRepository.find()
  }

  findOne(id: number) {
    return this.rutasRepository.findBy({ id })
  }

  update(id: number, updateRutaDto: UpdateRutaDto) {
    const update = this.rutasRepository.create(updateRutaDto)
    return this.rutasRepository.update( { id },  update)
  }

  remove(id: number) {
    return this.rutasRepository.delete({ id })
  }
}