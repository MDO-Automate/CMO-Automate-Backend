import { Injectable } from '@nestjs/common';

import { CreateKmAnalisiDto } from './dto/create-km-analisi.dto';
import { UpdateKmAnalisiDto } from './dto/update-km-analisi.dto';
import { KmProcessFileService } from './km-processfile.service';

@Injectable()
export class KmAnalisisService {

  constructor(
    private processFileService: KmProcessFileService,
  ){}

  async processFile(file: any){
    const processedData = await this.processFileService.getProcessedData(file)
    return {describe : 'Archivo procesado correctamente.', processedData } 
  }

  create(createKmAnalisiDto: CreateKmAnalisiDto) {
    console.log(createKmAnalisiDto)
    return 'This action adds a new kmAnalisi';
  }

  findAll() {
    return `This action returns all kmAnalisis`;
  }

  findOne(id: number) {
    return `This action returns a #${id} kmAnalisi`;
  }

  update(id: number, updateKmAnalisiDto: UpdateKmAnalisiDto) {
    console.log(updateKmAnalisiDto)
    return `This action updates a #${id} kmAnalisi`;
  }

  remove(id: number) {
    return `This action removes a #${id} kmAnalisi`;
  }
}
