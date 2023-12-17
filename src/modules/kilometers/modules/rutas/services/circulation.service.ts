import { Injectable, BadRequestException } from '@nestjs/common';
import { Circulacion } from '../entities/circulacion.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCirculationDTO } from '../dto/create-circulation.dto';
import { UpdateCirculationDTO } from '../dto/update-circulation.dto';
import { errorHandlerForeignkey } from '@utils/errosHandler';


@Injectable()
export class CirculationService {
  constructor(
    @InjectRepository(Circulacion) 
    private circulationRepository: Repository<Circulacion>,
  ) {}

  async getCirculationByName(circulation: number) {
    const circulations = await this.circulationRepository
    .createQueryBuilder('c')
    .innerJoinAndSelect('c.linea', 'l',   'l.id  = c.linea')
    .where({ circulacion: circulation })
    .getMany()
   
    return circulations
  }

  async getCirculationById(id: number) {
    const circulations = await this.circulationRepository
    .createQueryBuilder('c')
    .innerJoinAndSelect('c.linea', 'l',   'l.id  = c.linea')
    .where({ id })
    .getMany()
   
    return circulations
  }

  getAllCirculations(){
    return this.circulationRepository
      .createQueryBuilder('c')
      .innerJoinAndSelect('c.linea', 'l',   'l.id  = c.linea')
      .getMany()
  }

  async create(createCirculation: CreateCirculationDTO){
    const create = this.circulationRepository.create(createCirculation)
    const circulationsFound = await this.getCirculationByName(create.circulacion)
    if(circulationsFound.length > 0){
       throw new BadRequestException('Ya existe una circulación con ese número.')
    }
    return this.circulationRepository.save(create)
  }

  
  async update(id: number, updateCirculationDTO: UpdateCirculationDTO) {
    const circulationsFound = await this.getCirculationById(id)
    if(circulationsFound.length < 1){
       throw new BadRequestException('No se encontró una circulación con ese ID.')
    }
    const update = this.circulationRepository.create(updateCirculationDTO)
    try {
      this.circulationRepository.update( { id },  update)
      return updateCirculationDTO
    }catch(err){
      throw new BadRequestException(err)
    }
    
  }


  async remove(id: number) {
    const circulationFound = await this.getCirculationById(id)
    if(circulationFound.length < 1){
      throw new BadRequestException ('No se encontró una circulación con ese ID.')
    }
    try {
      await this.circulationRepository.delete({ id })
      return {
        status: 200,
        message: `Se ha eliminado el ID: ${id}`
      }
    }
    catch(err){
      errorHandlerForeignkey(err, 'circulación')
      throw new BadRequestException(err)
    }
  }



}
