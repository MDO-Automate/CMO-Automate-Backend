import { Injectable } from '@nestjs/common';
import { Circulacion } from './entities/circulacion.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CirculationService {
  constructor(
    @InjectRepository(Circulacion) 
    private circulationRepository: Repository<Circulacion>,
  ) {}

  getCirculationByName(circulation: number) {
    return this.circulationRepository.find({
      where: {
        circulacion: circulation,
      },
    })
  }
}
