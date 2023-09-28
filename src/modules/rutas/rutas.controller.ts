import { Controller, Get, Post, Patch, Param, Delete } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { RutasService } from './rutas.service';


@ApiTags('Rutas')
@Controller('rutas')
export class RutasController {
  constructor(private readonly rutasService: RutasService) {}

  @Post()
  create() {
    return this.rutasService.create();
  }

  @Get()
  findAll() {
    return this.rutasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.rutasService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string) {
    return this.rutasService.update(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.rutasService.remove(+id);
  }
}
