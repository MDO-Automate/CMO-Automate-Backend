import { Module } from '@nestjs/common';
 
import { KmAnalisisService } from './km-analisis.service';
import { KmAnalisisController } from './km-analisis.controller';
import { KmProcessFileService } from './km-processfile.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { KmAnalisis } from './entities/km-analisis.entity';
import { RutasModule } from '../rutas/rutas.module';
import { RutasDetailsService } from '../rutas/rutas-details.service';
import { CriteriosService } from '../criterios/criterios.service';
import { Criterio } from '../criterios/entities/criterio.entity';
import { RutasService } from '../rutas/rutas.service';
import { ItinerariosService } from '../itinerarios/itinerarios.service';
import { ItinerariosModule } from '../itinerarios/itinerarios.module';

@Module({
  imports: [ 
    TypeOrmModule.forFeature([ KmAnalisis, Criterio ]),
    RutasModule,
    ItinerariosModule
  ],
  controllers: [KmAnalisisController],
  providers: [
    KmAnalisisService, 
    KmProcessFileService,
    RutasDetailsService,
    RutasService,
    ItinerariosService,
    CriteriosService,
  ],
})
export class KmAnalisisModule {}
