import { Module } from '@nestjs/common';
import { ResumenElectricaService } from './resumen-electrica.service';
import { ResumenElectricaController } from './resumen-electrica.controller';

@Module({
  controllers: [ResumenElectricaController],
  providers: [ResumenElectricaService],
})
export class ResumenElectricaModule {}
