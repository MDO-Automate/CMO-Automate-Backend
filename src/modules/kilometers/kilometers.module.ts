import { Module } from '@nestjs/common';
import { CriteriosModule } from './modules/criterios/criterios.module';
import { InformeGeneralModule } from './modules/informe-general/informe-general.module';
import { ItinerariosModule } from './modules/itinerarios/itinerarios.module';
import { KmAnalisisModule } from './modules/km-analisis/km-analisis.module';
import { ResumenElectricaModule } from './modules/resumen-electrica/resumen-electrica.module';
import { RutasModule } from './modules/rutas/rutas.module';

@Module({
    imports: [
        CriteriosModule,
        InformeGeneralModule,
        ItinerariosModule,
        KmAnalisisModule,
        ResumenElectricaModule,
        RutasModule 
    ]
})
export class KilometersModule {}
