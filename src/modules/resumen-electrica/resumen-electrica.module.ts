import { Module } from '@nestjs/common';
import { ResumenElectricaService } from './resumen-electrica.service';
import { ResumenElectricaController } from './resumen-electrica.controller';
import { ResumenElectrica } from './entities/resumen-electrica.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RutasService } from '@modules/rutas/rutas.service';
import { RutasModule } from '@modules/rutas/rutas.module';

@Module({
  controllers: [ResumenElectricaController],
  providers: [
    ResumenElectricaService,
    RutasService
  ],
  imports: [ 
    TypeOrmModule.forFeature([ResumenElectrica]),
    RutasModule
  ],
  exports: [ TypeOrmModule ],
})
export class ResumenElectricaModule {}
