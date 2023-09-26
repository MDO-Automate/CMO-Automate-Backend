import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ResumenElectricaService } from './resumen-electrica.service';
import { CreateResumenElectricaDto } from './dto/create-resumen-electrica.dto';
import { UpdateResumenElectricaDto } from './dto/update-resumen-electrica.dto';

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

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.resumenElectricaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateResumenElectricaDto: UpdateResumenElectricaDto) {
    return this.resumenElectricaService.update(+id, updateResumenElectricaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.resumenElectricaService.remove(+id);
  }
}
