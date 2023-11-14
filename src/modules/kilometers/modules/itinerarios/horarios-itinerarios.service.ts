import { Injectable } from '@nestjs/common';
import { HorariosIitinerario } from './entities/horarios-itinerario.entity';
import {Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ItinerariosService } from './itinerarios.service';
import { RutasService } from '../rutas/rutas.service';


@Injectable()
export class HorariosIitinerarioService {

    constructor(
        @InjectRepository(HorariosIitinerario) 
        private horariosItiRepository: Repository<HorariosIitinerario>,
        private itineraryService: ItinerariosService,
        private routeService: RutasService
    ){}

    async getScheludeByItineraryAndRoute(itineraryName: string, routeName: string){
        const itinerary = await this.itineraryService.findOneByName(itineraryName)
        const routes = await this.routeService.findOneByName(routeName)
        return this.horariosItiRepository.find({
            where: {
                linea: routes[0],
                itinerario: itinerary[0],
            }
        })
    }

    async getEndHourByItineraryAndRoute(itineraryName: string, routeName: string ){
        const itinerary = await this.getScheludeByItineraryAndRoute(itineraryName, routeName)
        return itinerary
    }

} 