import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  UseInterceptors,
  UploadedFile,
  BadRequestException,
  HttpCode
} from '@nestjs/common'
import { FileInterceptor } from '@nestjs/platform-express'
import { ApiBody, ApiConsumes, ApiTags } from '@nestjs/swagger'

import { KmAnalisisService } from './km-analisis.service'
import { CreateKmAnalisiDto } from './dto/create-km-analisi.dto'
import { UpdateKmAnalisiDto } from './dto/update-km-analisi.dto'
import { FileUploadDto } from './dto/upload-file.dto'
import { fileFilterXSL } from 'src/utils/fileFilterXSL'

@ApiTags('KM análisis')
@Controller('km-analisis')
export class KmAnalisisController {
  constructor(private readonly kmAnalisisService: KmAnalisisService) {}

  @Post('upload-file')
  @HttpCode(200)
  @UseInterceptors(FileInterceptor('file', {
    fileFilter: fileFilterXSL
  }))
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    description: 'Archivo de informe de servicio en excel',
    type: FileUploadDto,
  })
  uploadFile(@UploadedFile() file: any) {
    if(!file){
      throw new 
        BadRequestException(
          'Se debe de enviar un archivo en el body de la petición'
        )
    }
    return this.kmAnalisisService.processFile(file)
  }

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
  update(
    @Param('id') id: string,
    @Body() updateKmAnalisiDto: UpdateKmAnalisiDto,
  ) {
    return this.kmAnalisisService.update(+id, updateKmAnalisiDto);
  }

}
