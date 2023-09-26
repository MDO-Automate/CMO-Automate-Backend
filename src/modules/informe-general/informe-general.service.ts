import { Injectable } from '@nestjs/common';
import { CreateInformeGeneralDto } from './dto/create-informe-general.dto';
import { UpdateInformeGeneralDto } from './dto/update-informe-general.dto';

@Injectable()
export class InformeGeneralService {
  create(createInformeGeneralDto: CreateInformeGeneralDto) {
    return 'This action adds a new informeGeneral';
  }

  findAll() {
    return `This action returns all informeGeneral`;
  }

  findOne(id: number) {
    return `This action returns a #${id} informeGeneral`;
  }

  update(id: number, updateInformeGeneralDto: UpdateInformeGeneralDto) {
    return `This action updates a #${id} informeGeneral`;
  }

  remove(id: number) {
    return `This action removes a #${id} informeGeneral`;
  }
}
