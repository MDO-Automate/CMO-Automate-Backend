import { Injectable } from '@nestjs/common';
import { CreateResumenElectricaDto } from './dto/create-resumen-electrica.dto';
import { UpdateResumenElectricaDto } from './dto/update-resumen-electrica.dto';

@Injectable()
export class ResumenElectricaService {
  create(createResumenElectricaDto: CreateResumenElectricaDto) {
    return 'This action adds a new resumenElectrica';
  }

  findAll() {
    return `This action returns all resumenElectrica`;
  }

  findOne(id: number) {
    return `This action returns a #${id} resumenElectrica`;
  }

  update(id: number, updateResumenElectricaDto: UpdateResumenElectricaDto) {
    return `This action updates a #${id} resumenElectrica`;
  }

  remove(id: number) {
    return `This action removes a #${id} resumenElectrica`;
  }
}
