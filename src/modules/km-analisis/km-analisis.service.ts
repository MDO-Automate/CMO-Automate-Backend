import { Injectable } from '@nestjs/common';
import { CreateKmAnalisiDto } from './dto/create-km-analisi.dto';
import { UpdateKmAnalisiDto } from './dto/update-km-analisi.dto';

@Injectable()
export class KmAnalisisService {
  create(createKmAnalisiDto: CreateKmAnalisiDto) {
    return 'This action adds a new kmAnalisi';
  }

  findAll() {
    return `This action returns all kmAnalisis`;
  }

  findOne(id: number) {
    return `This action returns a #${id} kmAnalisi`;
  }

  update(id: number, updateKmAnalisiDto: UpdateKmAnalisiDto) {
    return `This action updates a #${id} kmAnalisi`;
  }

  remove(id: number) {
    return `This action removes a #${id} kmAnalisi`;
  }
}
