import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Ruta } from './entities/ruta.entity';
import { Repository } from 'typeorm';
import { getAaverageRoute } from 'src/utils/getAverageRoute';
import { CreateRutaDto } from './dto/create-ruta.dto';
import { UpdateRutaDto } from './dto/update-ruta.dto';

@Injectable()
export class RutasService {

  constructor(  
    @InjectRepository(Ruta) private rutasRepository: Repository<Ruta>
  ){}

  async getRouteDetails(route: string){

    const routeDetails = await this.rutasRepository
      .createQueryBuilder('r')
      .innerJoinAndSelect('r.itinerario1', 'i', 'i.id = r.itinerario1')
      .innerJoinAndSelect('r.itinerario2', 'i2', 'i2.id = r.itinerario2')
      .innerJoinAndSelect('r.itinerario3', 'i3', 'i3.id = r.itinerario3')
      .innerJoinAndSelect('r.itinerario4', 'i4', 'i4.id = r.itinerario4')
      .getMany();
  
    const currentRoute = routeDetails.find((item) => item.nombre == route)
    if(!currentRoute) return

    const {  
      kmItinerario1,
      kmItinerario2,
      kmItinerario3,
      kmItinerario4,
      itinerario1,
      itinerario2,
      itinerario3,
      itinerario4,
      inicioHabil,
      inicioSabado,
      inicioDomingo,
      finHabil,
      finSabado,
      finDomingo
    } = currentRoute

    const averageKm =  {
      km1: getAaverageRoute(kmItinerario1 || 0, itinerario1.nombre),
      km2: getAaverageRoute(kmItinerario2 || 0, itinerario2.nombre),
      km3: getAaverageRoute(kmItinerario3 || 0, itinerario3.nombre),
      km4: getAaverageRoute(kmItinerario4 || 0, itinerario4.nombre),
    }

    return {
      ruta: route,
      inicioHabil,
      inicioSabado,
      inicioDomingo,
      finHabil,
      finSabado,
      finDomingo,
      medias: averageKm,
    };
  };

  create(createRutaDto: CreateRutaDto) {
    const data = this.rutasRepository.create(createRutaDto)
    return this.rutasRepository.save(data)
  }

  findAll() {
    return this.rutasRepository.find()
  }

  findOne(id: number) {
    return this.rutasRepository.findBy({ id })
  }

  update(id: number, updateRutaDto: UpdateRutaDto) {
    const update = this.rutasRepository.create(updateRutaDto)
    return this.rutasRepository.update( { id },  update)
  }

  remove(id: number) {
    return this.rutasRepository.delete({ id })
  }
}
