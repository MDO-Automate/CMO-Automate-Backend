import { ApiTags } from '@nestjs/swagger';
import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { KmIncidenciaServices } from '../services/km-incidencia.service';
import { CreateIncidenciaDTO } from '../dto/create-km-incidencia.dto';
import { UpdateIncidenciaDTO } from '../dto/update-km-incidencia.dto';

@ApiTags('Incidencias en analisis de kilómetros')
@Controller('km-incidencia')
export class KmIncidenciaController {

    constructor(private kmIncidenciaServices: KmIncidenciaServices){}

    @Post()
    create(@Body() createIncidenciaDTO: CreateIncidenciaDTO){
        return this.kmIncidenciaServices.create(createIncidenciaDTO)
    }

    @Get()
    findAll(){
        return this.kmIncidenciaServices.findAll()
    }

    @Get(':id')
    findOne(@Param('id') id: number) {
        return this.kmIncidenciaServices.findOne(id)
    }

    @Patch(':id')
    update(@Param('id') id: number, @Body() updateIncidenciaDTO: UpdateIncidenciaDTO) {
        return this.kmIncidenciaServices.update(id, updateIncidenciaDTO)
    }

    @Delete(':id')
    remove(@Param('id') id:number) {
        return this.kmIncidenciaServices.remove(id)
    }
    
}