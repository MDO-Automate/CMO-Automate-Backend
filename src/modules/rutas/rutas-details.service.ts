import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { getAaverageRoute } from 'src/utils/getAverageRoute';
import { Ruta } from './entities/ruta.entity';
import { Repository } from 'typeorm';
import { getDayType, getFormatDate } from 'src/utils/date';

@Injectable()
export class RutasDetailsService {

    constructor(  
        @InjectRepository(Ruta) private rutasRepository: Repository<Ruta>
    ){}

    async getRouteDetails(route: string){
        const routeDetails = await this.rutasRepository
          .createQueryBuilder('r')
          .innerJoinAndSelect('r.itinerario1', 'i',   'i.id  = r.itinerario1')
          .innerJoinAndSelect('r.itinerario2', 'i2',  'i2.id = r.itinerario2')
          .innerJoinAndSelect('r.itinerario3', 'i3',  'i3.id = r.itinerario3')
          .innerJoinAndSelect('r.itinerario4', 'i4',  'i4.id = r.itinerario4')
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
    
    async getItineraryDistance(route:  string, itinerary: string){
        const routeDetails = await this.getRouteDetails(`${route}`)
        const itineraries = routeDetails.medias
    
        let itineraryDistance = 0
        let kmSelected = ''
    
        const itineraryKeys = Object.keys(itineraries)
        itineraryKeys.forEach(item => {
          if(itineraries[item].itinerario === itinerary){
            kmSelected = item
            itineraryDistance = itineraries[item].distancia 
            return
          }
        })
    
        return {
          name: kmSelected,
          media: itineraryDistance
        }
    }

    async getSchedulesByRoutAndDate(route: string, date: string){
      const routeDetails = await this.getRouteDetails(route)
      const typeDay = getDayType(getFormatDate(date))
      
      const schedules = {
        habil: {
          startRoute: routeDetails.inicioHabil,
          endRoute: routeDetails.finHabil
        },
        saturday: {
          startRoute: routeDetails.inicioSabado,
          endRoute: routeDetails.finSabado
        },
        sunday: {
          startRoute: routeDetails.inicioDomingo,
          endRoute: routeDetails.finDomingo
        }
      }

      return schedules[`${typeDay}`]
    }
}
