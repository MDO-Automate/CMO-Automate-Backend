import { Injectable } from '@nestjs/common';
import { CreateFestivoDto } from './dto/create-festivo.dto';
import { UpdateFestivoDto } from './dto/update-festivo.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Festivos } from './entities/festivo.entity';
import { getFormatStringDate } from '@utils/date';

@Injectable()
export class FestivosService {

  constructor(
    @InjectRepository(Festivos) private festivosRepository: Repository<Festivos>
  ){}

  create(createFestivoDto: CreateFestivoDto) {
    console.log(createFestivoDto)
    return 'This action adds a new festivo';
  }

  findAll() {
    return `This action returns all festivos`;
  }

  findOne(id: number) {
    return `This action returns a #${id} festivo`;
  }

  async findByDate(date: string){
    const dateFormat = getFormatStringDate(date)
    return await this.festivosRepository
    .createQueryBuilder('entidad')
    .where(
      `DATEPART(MONTH, entidad.fecha) = DATEPART(MONTH, :dateFormat) AND DATEPART(DAY, entidad.fecha) = DATEPART(DAY, :dateFormat)`, 
      { dateFormat })
    .getMany();
  }

  update(id: number, updateFestivoDto: UpdateFestivoDto) {
    console.log(updateFestivoDto)
    return `This action updates a #${id} festivo`;
  }

  remove(id: number) {
    return `This action removes a #${id} festivo`;
  }
}
