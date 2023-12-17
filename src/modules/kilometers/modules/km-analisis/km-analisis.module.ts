import { Module } from '@nestjs/common';
 
import { KmAnalisisService } from './services/km-analisis.service';
import { KmAnalisisController } from './controllers/km-analisis.controller';
import { KmProcessFileService } from './services/km-processfile.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { KmAnalisis } from './entities/km-analisis.entity';
import { RutasModule } from '../rutas/rutas.module';
import { RutasDetailsService } from '../rutas/services/rutas-details.service';
import { CriteriosService } from '../criterios/services/criterios.service';
import { RutasService } from '../rutas/services/rutas.service';
import { ItinerariosService } from '../itinerarios/services/itinerarios.service';
import { ItinerariosModule } from '../itinerarios/itinerarios.module';
import { ResumenElectricaService } from '../resumen-electrica/resumen-electrica.service';
import { ResumenElectricaModule } from '../resumen-electrica/resumen-electrica.module';
import { InformeGeneralService } from '../informe-general/informe-general.service';
import { InformeGeneralModule } from '../informe-general/informe-general.module';
import { CirculationService } from '../rutas/services/circulation.service';
import { HorariosItinerarioService } from '../itinerarios/services/horarios-itinerarios.service';
import { CalculateCriteriosService } from '../criterios/services/calculate-criterios.service';
import { CriteriosModule } from '../criterios/criterios.module';
import { FestivosModule } from '../festivos/festivos.module';
import { FestivosService } from '../festivos/festivos.service';
import { KmIncidenciaServices } from './services/km-incidencia.service';
import { KmIncidencia } from './entities/km-incidencias.entity';
import { KmIncidenciaController } from './controllers/km-incidencia.controller';

@Module({
  imports: [ 
    TypeOrmModule.forFeature([ KmAnalisis, KmIncidencia ]),
    RutasModule,
    ItinerariosModule,
    ResumenElectricaModule,
    InformeGeneralModule,
    CriteriosModule,
    FestivosModule
  ],
  controllers: [
    KmAnalisisController, 
    KmIncidenciaController
  ],
  providers: [
    KmAnalisisService, 
    KmProcessFileService,
    RutasDetailsService,
    RutasService,
    ItinerariosService,
    CriteriosService,
    ResumenElectricaService,
    InformeGeneralService,
    CirculationService,
    HorariosItinerarioService,
    CalculateCriteriosService,
    FestivosService,
    KmIncidenciaServices
  ],
})
export class KmAnalisisModule {}
