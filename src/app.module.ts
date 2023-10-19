

import { Module } from '@nestjs/common';

import { EnvironmentModule } from '@config/modules/environment.module';
import { DatabaseModule } from '@config/modules/database.module';


import { PruebaModule }             from  '@modules/prueba/prueba.module';
import { KmAnalisisModule }         from '@modules/km-analisis/km-analisis.module';
import { CriteriosModule }          from '@modules/criterios/criterios.module';
import { InformeGeneralModule }     from '@modules/informe-general/informe-general.module';
import { ItinerariosModule }        from '@modules/itinerarios/itinerarios.module';
import { ResumenElectricaModule }   from '@modules/resumen-electrica/resumen-electrica.module';
import { RutasModule }              from '@modules/rutas/rutas.module';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    EnvironmentModule,
    DatabaseModule,
    PruebaModule,
    KmAnalisisModule,
    CriteriosModule,
    InformeGeneralModule,
    ItinerariosModule,
    ResumenElectricaModule,
    RutasModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
