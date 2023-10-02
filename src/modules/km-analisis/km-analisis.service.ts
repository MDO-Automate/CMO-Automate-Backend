import { Injectable } from '@nestjs/common';

import { CreateKmAnalisiDto } from './dto/create-km-analisi.dto';
import { UpdateKmAnalisiDto } from './dto/update-km-analisi.dto';
import { KmProcessFileService } from './km-processfile.service';
import { KmAnalisis } from './entities/km-analisis.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class KmAnalisisService {

  constructor(
    private processFileService: KmProcessFileService,
    @InjectRepository(KmAnalisis) private kmAnalisisRepository: Repository<KmAnalisis>
  ){}

  async processFile(file: any){
    const processedData = await this.processFileService.getProcessedData(file)
    return {
      statusCode: 200,
      describe : 'Archivo procesado correctamente.', 
      processedData 
    } 
  }

  create(createKmAnalisiDto: CreateKmAnalisiDto) {
    const data = this.kmAnalisisRepository.create(createKmAnalisiDto)
    return this.kmAnalisisRepository.save(data)
  }

  findAll() {
    return this.kmAnalisisRepository.find()
  }

  findOne(id: number) {
    return this.kmAnalisisRepository.findBy({ id })
  }

  update(id: number, updateKmAnalisiDto: UpdateKmAnalisiDto) {
    const update = this.kmAnalisisRepository.create(updateKmAnalisiDto)
    return this.kmAnalisisRepository.update({ id }, update )
  }

}
