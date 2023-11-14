import { ApiTags } from '@nestjs/swagger';
import { Controller, Get, Post, Body } from '@nestjs/common';
import { KmIncidenciaServices } from './km-incidencia.service';
import { CreateIncidenciaDTO } from './dto/create-km-incidencia.dto';

@ApiTags('Incidencias en analisis de kilómetros')
@Controller('km-incidencia')
export class KmIncidenciaController {

    constructor(private kmIncidenciaServices: KmIncidenciaServices){}

    @Get()
    findAll(){
        return this.kmIncidenciaServices.findAll()
    }

    @Post()
    save(@Body() createIncidenciaDTO: CreateIncidenciaDTO){
        return this.kmIncidenciaServices.save(createIncidenciaDTO)
    }
}
