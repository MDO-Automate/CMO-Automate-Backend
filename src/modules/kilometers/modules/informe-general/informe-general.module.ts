import { Module } from '@nestjs/common';
import { InformeGeneralService } from './informe-general.service';
import { InformeGeneralController } from './informe-general.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InformeGeneral } from './entities/informe-general.entity';
import { RutasService } from '../rutas/rutas.service';
import { RutasModule } from '../rutas/rutas.module';

@Module({
  controllers: [InformeGeneralController],
  providers: [
    InformeGeneralService,
    RutasService,
  ],
  imports: [ 
    TypeOrmModule.forFeature([InformeGeneral]),
    RutasModule
  ],
  exports: [ TypeOrmModule ],
})
export class InformeGeneralModule {}
