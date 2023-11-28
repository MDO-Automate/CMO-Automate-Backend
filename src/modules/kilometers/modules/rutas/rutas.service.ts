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
  
  create(createRutaDto: CreateRutaDto) {
    const data = this.rutasRepository.create(createRutaDto)
    return this.rutasRepository.save(data)
  }	

  findAll() {
    return this.rutasRepository.find()
  }

  async findOne(id: number) {
    return await this.rutasRepository.findBy({ id })
  }


  findOneByName(nombre: string) {
    return this.rutasRepository.findBy({ nombre })
  }

  update(id: number, updateRutaDto: UpdateRutaDto) {
    const update = this.rutasRepository.create(updateRutaDto)
    return this.rutasRepository.update( { id },  update)
  }

  async remove(id: number) {
    const RouteFound = await this.findOne(id)
    if(RouteFound.length < 1){
      throw new BadRequestException ('No se encontró una ruta con ese ID.')
    }
    return this.rutasRepository.delete({ id })
  }
}