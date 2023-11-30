import { ApiTags } from "@nestjs/swagger";
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { HorariosIitinerarioService } from "./horarios-itinerarios.service";
import { CreateHorariosItinerarioDto } from "./dto/create-horarios-itinerario.dto";
import { UpdateHorariosItinerarioDto } from "./dto/update-horarios-itinerario.dto";

@ApiTags('Horarios Itinerarios')
@Controller('horarios-itinerario')

export class HorariosItinerariosController {

    constructor(private readonly horariosItinerariosService: HorariosIitinerarioService) {}

    @Post()
    create(@Body() createHorariosItinerarioDto: CreateHorariosItinerarioDto){
        return this.horariosItinerariosService.create(createHorariosItinerarioDto)
    }

    @Get()
    findAll() {
        return this.horariosItinerariosService.findAll()
    }

    @Get(':id')
    findOne(@Param('id') id: number ) {
        return this.horariosItinerariosService.findOne(id)
    }

    @Patch(':id')
    update(@Param('id') id: number, @Body() updateHorariosItinerarioDto: UpdateHorariosItinerarioDto) {
        return this.horariosItinerariosService.update(id, updateHorariosItinerarioDto)
    }

    @Delete(':id')
    remove(@Param('id') id: number) {
        return this.horariosItinerariosService.remove(id)
    }

}