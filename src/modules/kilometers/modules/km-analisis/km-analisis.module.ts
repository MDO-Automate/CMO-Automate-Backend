import { Module } from '@nestjs/common';
 
import { KmAnalisisService } from './km-analisis.service';
import { KmAnalisisController } from './km-analisis.controller';
import { KmProcessFileService } from './km-processfile.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { KmAnalisis } from './entities/km-analisis.entity';
import { RutasModule } from '../rutas/rutas.module';
import { RutasDetailsService } from '../rutas/rutas-details.service';
import { CriteriosService } from '../criterios/criterios.service';
import { RutasService } from '../rutas/rutas.service';
import { ItinerariosService } from '../itinerarios/itinerarios.service';
import { ItinerariosModule } from '../itinerarios/itinerarios.module';
import { ResumenElectricaService } from '../resumen-electrica/resumen-electrica.service';
import { ResumenElectricaModule } from '../resumen-electrica/resumen-electrica.module';
import { InformeGeneralService } from '../informe-general/informe-general.service';
import { InformeGeneralModule } from '../informe-general/informe-general.module';
import { CirculationService } from '../rutas/circulation.service';
import { HorariosIitinerarioService } from '../itinerarios/horarios-itinerarios.service';
import { CalculateCriteriosService } from '../criterios/calculate-criterios.service';
import { CriteriosModule } from '../criterios/criterios.module';
import { FestivosModule } from '../festivos/festivos.module';
import { FestivosService } from '../festivos/festivos.service';
import { KmIncidenciaServices } from './km-incidencia.service';
import { KmIncidencia } from './entities/km-incidencias.entity';
import { KmIncidenciaController } from './km-incidencia.controller';

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
    HorariosIitinerarioService,
    CalculateCriteriosService,
    FestivosService,
    KmIncidenciaServices
  ],
})
export class KmAnalisisModule {}
