import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Between, Equal, FindOptionsWhere, Repository } from 'typeorm';

import { KmAnalisis } from './entities/km-analisis.entity';
import { CreateKmAnalisiDto } from './dto/create-km-analisi.dto';
import { UpdateKmAnalisiDto } from './dto/update-km-analisi.dto';
import { KmProcessFileService } from './km-processfile.service';
import { getFormatStringDate } from 'src/utils/date';
import { CriteriosService } from '../criterios/criterios.service';

@Injectable()
export class KmAnalisisService {

  constructor(
    private processFileService: KmProcessFileService,
    private criteriosService: CriteriosService,
    @InjectRepository(KmAnalisis) private kmAnalisisRepository: Repository<KmAnalisis>,
  ){}

  async processFile(file: any){
    const processedData = await this.processFileService.getProcessedData(file)
    return {
      statusCode: 200,
      describe : 'Archivo procesado correctamente.', 
      processedData 
    } 
  }

  create(createKmAnalisiDto: CreateKmAnalisiDto) {
    const data = this.kmAnalisisRepository.create(createKmAnalisiDto)
    return this.kmAnalisisRepository.save(data)
  }

  findAll() {
    return this.kmAnalisisRepository.find()
  }

  async multiFilter(filter: any){
    const { 
      ruta,
      fecha,
      itinerario,
      criterio,
      kmInicial,
      kmFinal 
    } = filter

    if(!ruta) {
      throw new 
        BadRequestException(
          'No se encontró  query de ruta filtrar.',
          'Campo requerido'
        )
    }

    if(!fecha) {
      throw new 
        BadRequestException(
          'No se encontró query de fecha para filtrar.',
          'Campo requerido'
        )
    }

    let whereOptions: FindOptionsWhere<KmAnalisis>  = {
      linea: Equal(ruta),
      fecha: getFormatStringDate(fecha)
    }

    if(itinerario){
      whereOptions = {
        ...whereOptions,
        itinerario: Equal(itinerario)
      }
    }

    if(kmInicial && kmFinal){
      whereOptions = {
        ...whereOptions,
        distancia: Between(kmInicial, kmFinal)
      }
    }

    if(criterio){
       const response = await this.criteriosService.findOne(criterio)
       if(response.length < 1){
        throw new 
          BadRequestException(
            'No se encontró el criterio seleccionado.'
          )
       }
       const criterioName = response[0].campo
       const criterioKey =  JSON.parse(`{ "${criterioName}": true }`)
       whereOptions = {
        ...whereOptions,
        ...criterioKey
      }
    }
    
    return this.kmAnalisisRepository.find({ where: whereOptions })
  }

  update(id: number, updateKmAnalisiDto: UpdateKmAnalisiDto) {
    const update = this.kmAnalisisRepository.create(updateKmAnalisiDto)
    return this.kmAnalisisRepository.update({ id }, update )
  }

}
