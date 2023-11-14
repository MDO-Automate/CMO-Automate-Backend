import { Module } from '@nestjs/common';
import { CriteriosService } from './criterios.service';
import { CriteriosController } from './criterios.controller';
import { Criterio } from './entities/criterio.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CalculateCriteriosService } from './calculate-criterios.service';
import { ItinerariosModule } from '../itinerarios/itinerarios.module';
import { HorariosIitinerarioService } from '../itinerarios/horarios-itinerarios.service';
import { ItinerariosService } from '../itinerarios/itinerarios.service';
import { RutasModule } from '../rutas/rutas.module';
import { RutasService } from '../rutas/rutas.service';
import { CirculationService } from '../rutas/circulation.service';
import { FestivosService } from '../festivos/festivos.service';
import { FestivosModule } from '../festivos/festivos.module';

@Module({
  controllers: [ CriteriosController ],
  providers: [
    CriteriosService,
    CalculateCriteriosService,
    HorariosIitinerarioService,
    ItinerariosService,
    RutasService,
    CirculationService,
    FestivosService
  ],
  imports: [
    TypeOrmModule.forFeature([Criterio]),
    ItinerariosModule,
    RutasModule,
    FestivosModule,
  ],
  exports: [ TypeOrmModule ],
})
export class CriteriosModule {}
