import { Module } from '@nestjs/common';
import { KmAnalisisService } from './km-analisis.service';
import { KmAnalisisController } from './km-analisis.controller';

@Module({
  controllers: [KmAnalisisController],
  providers: [KmAnalisisService],
})
export class KmAnalisisModule {}
