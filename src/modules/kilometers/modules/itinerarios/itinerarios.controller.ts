import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { ItinerariosService } from './itinerarios.service';
import { CreateItinerarioDto } from './dto/create-itinerario.dto';
import { UpdateItinerarioDto } from './dto/update-itinerario.dto';

@ApiTags('Itinerarios')
@Controller('itinerarios')
export class ItinerariosController {
  constructor(private readonly itinerariosService: ItinerariosService) {}

  @Post()
  create(@Body() createItinerarioDto: CreateItinerarioDto) {
    return this.itinerariosService.create(createItinerarioDto);
  }

  @Get()
  findAll() {
    return this.itinerariosService.findAll();
  }

  @Get(':nombre')
  findOneByName(@Param('nombre') nombre: string) {
    return this.itinerariosService.findOneByName(nombre);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateItinerarioDto: UpdateItinerarioDto) {
    return this.itinerariosService.update(+id, updateItinerarioDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.itinerariosService.remove(+id);
  }
}
