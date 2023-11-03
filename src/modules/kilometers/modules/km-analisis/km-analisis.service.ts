import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Between, Equal, FindOptionsWhere, Repository } from 'typeorm';

import { KmAnalisis } from './entities/km-analisis.entity';
import { CreateKmAnalisiDto } from './dto/create-km-analisi.dto';
import { UpdateKmAnalisiDto } from './dto/update-km-analisi.dto';
import { KmProcessFileService } from './km-processfile.service';
import { getFormatDatatime, getFormatStringDate } from 'src/utils/date';
import { CriteriosService } from '../criterios/criterios.service';
import { RutasService } from '../rutas/rutas.service';
import { ItinerariosService } from '../itinerarios/itinerarios.service';
import { CreateKmAnalisiArrayDto } from './dto/create-km-analisisArray.dto';


@Injectable()
export class KmAnalisisService {

  constructor(
    private processFileService: KmProcessFileService,
    private criteriosService: CriteriosService,
    private itinerariesService: ItinerariosService,
    private rutaService: RutasService,
    @InjectRepository(KmAnalisis) private kmAnalisisRepository: Repository<KmAnalisis>,
  ){}

  async processFile(file: any){
    const processedData = await this.processFileService.getProcessedData(file)
    return {
      statusCode: 200,
      describe : 'Archivo procesado correctamente.', 
      data: processedData
    } 
  }

 async assignData(item: CreateKmAnalisiArrayDto){
    const line = await this.rutaService.findOneByName(`${item.linea}`)
    const itinerary = await this.itinerariesService.findOneByName(`${item.itinerario}`)
    return item = {
      ...item,
      fecha: getFormatStringDate(item.fecha),
      inicioServicio: getFormatDatatime(item.inicioServicio),
      finServicio: getFormatDatatime(item.finServicio),
      inicioServicioEfectivo:  getFormatDatatime(item.inicioServicioEfectivo),
      finServicioEfectivo:  getFormatDatatime(item.inicioServicioEfectivo),
      linea: line[0],
      itinerario: itinerary[0]
    }
  }

  async create(createKmAnalisiDto: CreateKmAnalisiDto) {
    try{
      const created = await Promise.all(createKmAnalisiDto.data.map(async(item) => {
        const dataAssigned = await this.assignData(item)
        item = {
          ...item,
          ...dataAssigned
        }
        const data = this.kmAnalisisRepository.create(item)
        return await this.kmAnalisisRepository.save(data)
      }))

      return created
    }
    catch(e){
      if(e.serverName) {
        throw new BadRequestException(
          'Se ha producido un error en el origen de los datos, por favor intente más tarde. Si el error persiste comuniquese con la persona encarga del soporte del aplicativo.',
          'Base de datos'
        )
      }
    }
  }

  findAll() {
    return this.kmAnalisisRepository.find()
  }

  async multiFilter(filter: any){
    console.log(filter)
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
          'No se encontró query de ruta filtrar.',
          'ruta'
        )
    }

    if(!fecha) {
      throw new 
        BadRequestException(
          'No se encontró query de fecha para filtrar.',
          'fecha'
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

    const zonaHorariaColombia = 'SA Pacific Standard Time'; 
    return this.kmAnalisisRepository
    .createQueryBuilder('km')
    .innerJoinAndSelect('km.itinerario', 'i',   'i.id  = km.itinerario')
    .innerJoinAndSelect('km.linea', 'r',  'r.id = km.linea')
    .addSelect(`km.inicioServicio, km.finServicio AT TIME ZONE :zonaHoraria`)
    .setParameter('zonaHoraria', zonaHorariaColombia)
    .where(whereOptions)
    .getMany()
  }

  async update(updateKmAnalisiDto: UpdateKmAnalisiDto) {
    const updated = updateKmAnalisiDto.data.map(async (item) => {
      const dataAssigned = await this.assignData(item)
      const { id } = item
      item = {
        ...item,
        ...dataAssigned
      }

      delete item.id
      const update = this.kmAnalisisRepository.create(item)
      return this.kmAnalisisRepository.update({ id }, update )
    })

    return updated
  }

}
