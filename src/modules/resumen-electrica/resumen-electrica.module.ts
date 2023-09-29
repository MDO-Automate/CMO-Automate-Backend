import { Module } from '@nestjs/common';
import { ResumenElectricaService } from './resumen-electrica.service';
import { ResumenElectricaController } from './resumen-electrica.controller';
import { ResumenElectrica } from './entities/resumen-electrica.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [ResumenElectricaController],
  providers: [ResumenElectricaService],
  imports: [ TypeOrmModule.forFeature([ResumenElectrica]) ],
  exports: [ TypeOrmModule ],
})
export class ResumenElectricaModule {}
