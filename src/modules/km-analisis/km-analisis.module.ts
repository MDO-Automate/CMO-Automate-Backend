import { Module } from '@nestjs/common';
 
import { KmAnalisisService } from './km-analisis.service';
import { KmAnalisisController } from './km-analisis.controller';
import { KmProcessFileService } from './km-processfile.service';
import { ItinerariosModule } from '../itinerarios/itinerarios.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { KmAnalisis } from './entities/km-analisis.entity';
import { RutasModule } from '../rutas/rutas.module';
import { RutasService } from '../rutas/rutas.service';

@Module({
  imports: [ 
    TypeOrmModule.forFeature([ KmAnalisis ]),
    ItinerariosModule,
    RutasModule 
  ],
  controllers: [KmAnalisisController],
  providers: [
    KmAnalisisService, 
    KmProcessFileService,
    RutasService
  ],
})
export class KmAnalisisModule {}
