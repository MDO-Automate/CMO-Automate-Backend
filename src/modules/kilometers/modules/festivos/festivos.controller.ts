import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FestivosService } from './festivos.service';
import { CreateFestivoDto } from './dto/create-festivo.dto';
import { UpdateFestivoDto } from './dto/update-festivo.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Festivos')
@Controller('festivos')
export class FestivosController {
  constructor(private readonly festivosService: FestivosService) {}

  @Post()
  create(@Body() createFestivoDto: CreateFestivoDto) {
    return this.festivosService.create(createFestivoDto);
  }

  @Get()
  findAll() {
    return this.festivosService.getAll();
  }

  @Get(':date')
  findOne(@Param('date') date: string) {
    return this.festivosService.getByDate(date);
  }

  @Patch(':date')
  update(@Param('date') date: string, @Body() updateFestivoDto: UpdateFestivoDto) {
    return this.festivosService.update(date, updateFestivoDto);
  }

  @Delete(':date')
  remove(@Param('date') date: string) {
    return this.festivosService.remove(date);
  }
}
