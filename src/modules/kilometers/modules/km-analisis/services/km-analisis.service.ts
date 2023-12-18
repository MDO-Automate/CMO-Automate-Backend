import {
  Injectable,
  BadRequestException,
  InternalServerErrorException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Between, Equal, FindOptionsWhere, Repository } from 'typeorm';

import { KmAnalisis } from '../entities/km-analisis.entity';
import { CreateKmAnalisiDto } from '../dto/create-km-analisi.dto';
import { UpdateKmAnalisiDto } from '../dto/update-km-analisi.dto';
import { KmProcessFileService } from './km-processfile.service';
import { getFormatDatatime, getFormatStringDate } from 'src/utils/date';
import { CriteriosService } from '../../criterios/services/criterios.service';
import { RutasService } from '../../rutas/services/rutas.service';
import { ItinerariosService } from '../../itinerarios/services/itinerarios.service';
import { CreateKmAnalisiArrayDto } from '../dto/create-km-analisisArray.dto';

@Injectable()
export class KmAnalisisService {
  constructor(
    private processFileService: KmProcessFileService,
    private criteriosService: CriteriosService,
    private itinerariesService: ItinerariosService,
    private rutaService: RutasService,
    @InjectRepository(KmAnalisis)
    private kmAnalisisRepository: Repository<KmAnalisis>,
  ) {}

  async processFile(file: any) {
    const processedData = await this.processFileService.getProcessedData(file);
    return {
      statusCode: 200,
      describe: 'Archivo procesado correctamente.',
      data: processedData,
    };
  }

  async assignData(item: CreateKmAnalisiArrayDto) {
    const defaultDateTime = '01/01/2000 00:00:00'
    const line = await this.rutaService.findOneByName(`${item.linea}`);
    const itinerary = await this.itinerariesService.findOneByName(
      `${item.itinerario}`,
    );
    return (item = {
      ...item,
      fecha: getFormatStringDate(item.fecha),
      inicioServicio: getFormatDatatime(item.inicioServicio || defaultDateTime),
      finServicio: getFormatDatatime(item.finServicio || defaultDateTime),
      inicioServicioEfectivo: getFormatDatatime(item.inicioServicioEfectivo || defaultDateTime),
      finServicioEfectivo: getFormatDatatime(item.finServicioEfectivo || defaultDateTime),
      linea: line[0],
      itinerario: itinerary[0],
    });
  }

  async create(createKmAnalisiDto: CreateKmAnalisiDto) {

    try{
      const created = await Promise.all(
        createKmAnalisiDto.data
          .map(async (item) => {
            const dataAssigned = await this.assignData(item);
            item = {
              ...item,
              ...dataAssigned,
            };
            const { fecha, idSae } = item;
            const linea = item.linea.id
  
            //Revisar validación.
            const dataFound = await this.multiFilter({ fecha, linea, idSae });
            if (dataFound.length > 0) {
              return null;
            }
            const data = this.kmAnalisisRepository.create(item);
            return await this.kmAnalisisRepository.save(data);
          })
          .filter((item) => item !== null),
      )
      const cleanedItems = created.filter((item) => item !== null);
  
      if (cleanedItems.length < 1) {
        throw new BadRequestException(
          'Ya existen registros asociados a esta ruta en la fecha que quiere registrar.',
          'DUPLICIDAD',
        )
      }
  
      return created;

    }catch(e){
      if(e.response.error ===  'DUPLICIDAD'){
        throw new BadRequestException(
          e.response.message,
          e.response.error
        )
      }

      throw new BadRequestException(
        'Ha ocurrido un error inesperado, si continúa pasando contactar con soporte técnico.',
        'Error',
      )
    }

  }

  findAll() {
    return this.kmAnalisisRepository.find();
  }

  async multiFilter(filter: any) {
    const { idSae, linea, fecha, itinerario, criterio, kmInicial, kmFinal } =
      filter;

    if (!linea) {
      throw new BadRequestException(
        'No se encontró query de ruta filtrar.',
        'ruta',
      );
    }

    if (!fecha) {
      throw new BadRequestException(
        'No se encontró query de fecha para filtrar.',
        'fecha',
      );
    }

    let whereOptions: FindOptionsWhere<KmAnalisis> = {
      linea: Equal(linea),
      fecha: getFormatStringDate(fecha),
    };

    if (idSae) {
      whereOptions = {
        ...whereOptions,
        idSae: Equal(idSae),
      };
    }

    if (itinerario) {
      whereOptions = {
        ...whereOptions,
        itinerario: Equal(itinerario),
      };
    }

    if (kmInicial && kmFinal) {
      whereOptions = {
        ...whereOptions,
        distancia: Between(kmInicial, kmFinal),
      };
    }

    if (criterio) {
      const response = await this.criteriosService.findOne(criterio);
      if (response.length < 1) {
        throw new BadRequestException(
          'No se encontró el criterio seleccionado.',
        );
      }
      const criterioName = response[0].campo;
      const criterioKey = JSON.parse(`{ "${criterioName}": true }`);
      whereOptions = {
        ...whereOptions,
        ...criterioKey,
      };
    }

    const response = await this.kmAnalisisRepository
      .createQueryBuilder('km')
      .innerJoinAndSelect('km.itinerario', 'i', 'i.id  = km.itinerario')
      .innerJoinAndSelect('km.linea', 'r', 'r.id = km.linea')
      .innerJoinAndSelect('km.incidencia', 'inci', 'inci.id = km.incidencia')
      .where(whereOptions)
      .getMany();

    //const zonaHorariaColombia = 'SA Pacific Standard Time';
    return response;
  }

  async update(updateKmAnalisiDto: UpdateKmAnalisiDto) {
    const updated = updateKmAnalisiDto.data.map(async (item) => {
      const dataAssigned = await this.assignData(item);
      const { id } = item;
      item = {
        ...item,
        ...dataAssigned,
      };

      delete item.id;
      try {
        const update = this.kmAnalisisRepository.create(item);
        return this.kmAnalisisRepository.update({ id }, update);
      } catch (e) {
        throw new InternalServerErrorException('Error de base de datos');
      }
    });

    return updated;
  }
}
