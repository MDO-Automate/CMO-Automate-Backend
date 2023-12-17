import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Ruta } from './entities/ruta.entity';
import { RutasService } from './services/rutas.service';
import { RutasController } from './controllers/rutas.controller';
import { RutasDetailsService } from './services/rutas-details.service';
import { CirculationService } from './services/circulation.service';
import { Circulacion } from './entities/circulacion.entity';
import { CirculationController } from './controllers/circulation.controller';

@Module({
  imports: [ TypeOrmModule.forFeature([Ruta, Circulacion]) ],
  exports: [ TypeOrmModule ],
  controllers: [RutasController, CirculationController],
  providers: [RutasService, RutasDetailsService, CirculationService],
})
export class RutasModule {}
