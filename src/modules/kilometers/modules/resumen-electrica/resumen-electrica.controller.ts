import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { ResumenElectricaService } from './resumen-electrica.service';
import { CreateResumenElectricaDto } from './dto/create-resumen-electrica.dto';
import { UpdateResumenElectricaDto } from './dto/update-resumen-electrica.dto';

@ApiTags('Resumen eléctricas')
@Controller('resumen-electrica')
export class ResumenElectricaController {
  constructor(private readonly resumenElectricaService: ResumenElectricaService) {}

  @Post()
  create(@Body() createResumenElectricaDto: CreateResumenElectricaDto) {
    return this.resumenElectricaService.create(createResumenElectricaDto);
  }

  @Get()
  findAll() {
    return this.resumenElectricaService.findAll();
  }

  @Get(':fecha')
  findOne(@Param('fecha') fecha: string) {
    return this.resumenElectricaService.findOne(fecha);
  }

  @Patch(':fecha')
  update(@Param('fecha') fecha: string, @Body() updateResumenElectricaDto: UpdateResumenElectricaDto) {
    return this.resumenElectricaService.update(fecha, updateResumenElectricaDto);
  }

  @Delete(':fecha')
  remove(@Param('fecha') fecha: string) {
    return this.resumenElectricaService.remove(fecha);
  }
}
