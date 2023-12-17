import { Module } from '@nestjs/common';
import { CriteriosService } from './services/criterios.service';
import { CriteriosController } from './criterios.controller';
import { Criterio } from './entities/criterio.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CalculateCriteriosService } from './services/calculate-criterios.service';
import { ItinerariosModule } from '../itinerarios/itinerarios.module';
import { HorariosItinerarioService } from '../itinerarios/services/horarios-itinerarios.service';
import { ItinerariosService } from '../itinerarios/services/itinerarios.service';
import { RutasModule } from '../rutas/rutas.module';
import { RutasService } from '../rutas/services/rutas.service';
import { CirculationService } from '../rutas/services/circulation.service';
import { FestivosService } from '../festivos/festivos.service';
import { FestivosModule } from '../festivos/festivos.module';

@Module({
  controllers: [ CriteriosController ],
  providers: [
    CriteriosService,
    CalculateCriteriosService,
    HorariosItinerarioService,
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
