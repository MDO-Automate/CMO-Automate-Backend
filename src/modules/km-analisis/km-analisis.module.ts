import { Module } from '@nestjs/common';
 
import { KmAnalisisService } from './km-analisis.service';
import { KmAnalisisController } from './km-analisis.controller';
import { KmProcessFileService } from './km-processfile.service';

@Module({
  controllers: [KmAnalisisController],
  providers: [KmAnalisisService, KmProcessFileService],
})
export class KmAnalisisModule {}
