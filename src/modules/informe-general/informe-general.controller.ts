import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { InformeGeneralService } from './informe-general.service';
import { CreateInformeGeneralDto } from './dto/create-informe-general.dto';
import { UpdateInformeGeneralDto } from './dto/update-informe-general.dto';

@ApiTags('Informe general')
@Controller('informe-general')
export class InformeGeneralController {
  constructor(private readonly informeGeneralService: InformeGeneralService) {}

  @Post()
  create(@Body() createInformeGeneralDto: CreateInformeGeneralDto) {
    return this.informeGeneralService.create(createInformeGeneralDto);
  }

  @Get()
  findAll() {
    return this.informeGeneralService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.informeGeneralService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateInformeGeneralDto: UpdateInformeGeneralDto) {
    return this.informeGeneralService.update(+id, updateInformeGeneralDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.informeGeneralService.remove(+id);
  }
}
