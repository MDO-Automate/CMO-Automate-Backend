import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Ruta } from './entities/ruta.entity';
import { RutasService } from './rutas.service';
import { RutasController } from './rutas.controller';
import { RutasDetailsService } from './rutas-details.service';
import { CirculationService } from './circulation.service';
import { Circulacion } from './entities/circulacion.entity';
import { CirculationController } from './circulation.controller';

@Module({
  imports: [ TypeOrmModule.forFeature([Ruta, Circulacion]) ],
  exports: [ TypeOrmModule ],
  controllers: [RutasController, CirculationController],
  providers: [RutasService, RutasDetailsService, CirculationService],
})
export class RutasModule {}
