import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { ApiQuery, ApiTags } from '@nestjs/swagger';

import { InformeGeneralService } from './informe-general.service';
import { CreateInformeGeneralDto } from './dto/create-informe-general.dto';
import { UpdateGeralDataDtoArray } from './dto/update-general-data.dto';

@ApiTags('Informe general')
@Controller('informe-general')
export class InformeGeneralController {
  constructor(private readonly informeGeneralService: InformeGeneralService) {}

  @Post()
  create(@Body() createInformeGeneralDto: CreateInformeGeneralDto) {
    return this.informeGeneralService.create(createInformeGeneralDto);
  }

  @Get()
  @ApiQuery({ name: 'fecha' })
  @ApiQuery({ name: 'ruta' })
  findDateAndRoute(@Query('fecha') fecha: string, @Query('ruta') ruta: string) {
    return this.informeGeneralService.findByMonthAndRoute(fecha, ruta);
  }

  @Patch()
  update(@Body() updateInformeGeneralDto: UpdateGeralDataDtoArray) {
    return this.informeGeneralService.update(updateInformeGeneralDto);
  }

  @Delete(':fecha')
  remove(@Param('fecha') fecha: string) {
    return this.informeGeneralService.remove(fecha);
  }
}
