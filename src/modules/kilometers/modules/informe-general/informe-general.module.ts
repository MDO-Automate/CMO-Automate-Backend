import { Module } from '@nestjs/common';
import { InformeGeneralService } from './informe-general.service';
import { InformeGeneralController } from './informe-general.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InformeGeneral } from './entities/informe-general.entity';
import { RutasService } from '../rutas/rutas.service';
import { RutasModule } from '../rutas/rutas.module';
import { ResumenElectricaService } from '../resumen-electrica/resumen-electrica.service';
import { ResumenElectricaModule } from '../resumen-electrica/resumen-electrica.module';

@Module({
  controllers: [InformeGeneralController],
  providers: [
    InformeGeneralService,
    ResumenElectricaService,
    RutasService,
  ],
  imports: [ 
    TypeOrmModule.forFeature([InformeGeneral]),
    RutasModule,
    ResumenElectricaModule
  ],
  exports: [ TypeOrmModule ],
})
export class InformeGeneralModule {}
