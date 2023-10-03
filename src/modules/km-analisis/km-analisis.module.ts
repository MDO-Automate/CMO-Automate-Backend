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

@Module({
  imports: [ 
    TypeOrmModule.forFeature([ KmAnalisis, Criterio ]),
    RutasModule 
  ],
  controllers: [KmAnalisisController],
  providers: [
    KmAnalisisService, 
    KmProcessFileService,
    RutasDetailsService,
    CriteriosService
  ],
})
export class KmAnalisisModule {}
