import { BadRequestException, Injectable } from '@nestjs/common';
import { HorariosIitinerario } from './entities/horarios-itinerario.entity';
import {Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ItinerariosService } from './itinerarios.service';
import { RutasService } from '../rutas/rutas.service';
import { CreateHorariosItinerarioDto } from './dto/create-horarios-itinerario.dto';
import { UpdateHorariosItinerarioDto } from './dto/update-horarios-itinerario.dto';


@Injectable()
export class HorariosIitinerarioService {

    constructor(
        @InjectRepository(HorariosIitinerario) 
        private horariosItiRepository: Repository<HorariosIitinerario>,
        private itineraryService: ItinerariosService,
        private routeService: RutasService
    ){}
    
    findAll() {
        const horariosItinerarios = this.horariosItiRepository
            .createQueryBuilder('hi')
            .innerJoinAndSelect('hi.linea', 'l', 'l.id = hi.linea')
            .innerJoinAndSelect('hi.itinerario', 'i', 'i.id = hi.itinerario')
            .getMany()
        return horariosItinerarios
    }

    findOne(id: number) {
        const horariosItinerarios = this.horariosItiRepository
            .createQueryBuilder('hi')
            .innerJoinAndSelect('hi.linea', 'l', 'l.id = hi.linea')
            .innerJoinAndSelect('hi.itinerario', 'i', 'i.id = hi.itinerario')
            .where({id})
            .getMany()
        return horariosItinerarios
    }

    async create(createHorariosItinerarioDto: CreateHorariosItinerarioDto) {
        const create = this.horariosItiRepository.create(createHorariosItinerarioDto)
        return this.horariosItiRepository.save(create)

    }

    async update(id:number, updateHorariosItinerarioDto: UpdateHorariosItinerarioDto) {
        const horariosItiFound = await this.findOne(id)
        if (horariosItiFound.length < 1) {
            throw new BadRequestException('No se encontró una relación entre un horario y un itinerario con ese ID');
        }
        const update = this.horariosItiRepository.create(updateHorariosItinerarioDto)
        try {
            this.horariosItiRepository.update({id}, update)
            return updateHorariosItinerarioDto
        } catch (err) {
            throw new BadRequestException(err)
        }
    }

    async remove(id: number) {
        const horariosItiFound = await this.findOne(id)
        if (horariosItiFound.length < 1) {
            throw new BadRequestException('No se encontró una relacion entre horario y un itinerario con ese ID')
        }
        try {
            this.horariosItiRepository.delete({id})
            return {
                status: 200,
                message: `Se ha eliminado el ID: ${id}`
            }
        } catch(err) {
            throw new BadRequestException(err)
        }
    }

    
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