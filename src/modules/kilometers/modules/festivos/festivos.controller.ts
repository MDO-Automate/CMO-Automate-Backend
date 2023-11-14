import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FestivosService } from './festivos.service';
import { CreateFestivoDto } from './dto/create-festivo.dto';
import { UpdateFestivoDto } from './dto/update-festivo.dto';

@Controller('festivos')
export class FestivosController {
  constructor(private readonly festivosService: FestivosService) {}

  @Post()
  create(@Body() createFestivoDto: CreateFestivoDto) {
    return this.festivosService.create(createFestivoDto);
  }

  @Get()
  findAll() {
    return this.festivosService.findAll();
  }

  @Get(':date')
  findOne(@Param('date') date: string) {
    return this.festivosService.findByDate(date);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFestivoDto: UpdateFestivoDto) {
    return this.festivosService.update(+id, updateFestivoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.festivosService.remove(+id);
  }
}
