import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { KmAnalisisService } from './km-analisis.service';
import { CreateKmAnalisiDto } from './dto/create-km-analisi.dto';
import { UpdateKmAnalisiDto } from './dto/update-km-analisi.dto';

@Controller('km-analisis')
export class KmAnalisisController {
  constructor(private readonly kmAnalisisService: KmAnalisisService) {}

  @Post()
  create(@Body() createKmAnalisiDto: CreateKmAnalisiDto) {
    return this.kmAnalisisService.create(createKmAnalisiDto);
  }

  @Get()
  findAll() {
    return this.kmAnalisisService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.kmAnalisisService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateKmAnalisiDto: UpdateKmAnalisiDto) {
    return this.kmAnalisisService.update(+id, updateKmAnalisiDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.kmAnalisisService.remove(+id);
  }
}
