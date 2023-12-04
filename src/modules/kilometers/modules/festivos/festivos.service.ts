import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateFestivoDto } from './dto/create-festivo.dto';
import { UpdateFestivoDto } from './dto/update-festivo.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Festivos } from './entities/festivo.entity';
import { getFormatStringDate } from '@utils/date';

@Injectable()
export class FestivosService {

  constructor(
    @InjectRepository(Festivos) 
    private festivosRepository: Repository<Festivos>
  ){}

  getAll() {
    return this.festivosRepository.find()
  }

  async getByDate(date: string){
    const dateFormat = getFormatStringDate(date)
    return await this.festivosRepository
    .createQueryBuilder('entidad')
    .where(
      `DATEPART(MONTH, entidad.fecha) = DATEPART(MONTH, :dateFormat) AND DATEPART(DAY, entidad.fecha) = DATEPART(DAY, :dateFormat)`, 
      { dateFormat })
    .getMany();
  }

  async create(createFestivoDto: CreateFestivoDto) {
    const create = this.festivosRepository.create(createFestivoDto)
    const festivosFound = await this.getByDate(create.fecha)
    if (festivosFound.length > 0) {
      throw new BadRequestException('Esa fecha ya existe')
    }
    return this.festivosRepository.save(create)
  }

  async update(date: string, updateFestivoDto: UpdateFestivoDto) {
    const festivosFound = await this.getByDate(date)
    if (festivosFound.length < 1) {
      throw new BadRequestException('No se encontró esa fecha')
    }
    const update = this.festivosRepository.create(updateFestivoDto)
    try {
      this.festivosRepository.update(date, update)
      return updateFestivoDto
    } catch(err) {
      throw new BadRequestException(err)
    }
  }

  async remove(date: string) {
    const festivosFound = await this.getByDate(date)
    if (festivosFound.length < 1) {
      throw new BadRequestException('No se encontró un festivo en esa fecha')
    }
    try {
      this.festivosRepository.delete(date)
      return {
        status: 200,
        message: 'Se ha eliminado la fecha correctamente'
      }
    } catch (err) {
      throw new BadRequestException(err)
    }
  }
}
