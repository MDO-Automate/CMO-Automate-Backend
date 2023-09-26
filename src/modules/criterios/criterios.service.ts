import { Injectable } from '@nestjs/common';
import { CreateCriterioDto } from './dto/create-criterio.dto';
import { UpdateCriterioDto } from './dto/update-criterio.dto';

@Injectable()
export class CriteriosService {
  create(createCriterioDto: CreateCriterioDto) {
    return 'This action adds a new criterio';
  }

  findAll() {
    return `This action returns all criterios`;
  }

  findOne(id: number) {
    return `This action returns a #${id} criterio`;
  }

  update(id: number, updateCriterioDto: UpdateCriterioDto) {
    return `This action updates a #${id} criterio`;
  }

  remove(id: number) {
    return `This action removes a #${id} criterio`;
  }
}
