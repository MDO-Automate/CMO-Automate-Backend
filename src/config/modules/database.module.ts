import { Module }        from          '@nestjs/common';
import { TypeOrmModule } from   '@nestjs/typeorm';

import { Criterio }             from    '@modules/kilometers/modules/criterios/entities/criterio.entity';
import { InformeGeneral }       from    '@modules/kilometers/modules/informe-general/entities/informe-general.entity';
import { Itinerario }           from    '@modules/kilometers/modules/itinerarios/entities/itinerario.entity';
import { KmAnalisis }           from    '@modules/kilometers/modules/km-analisis/entities/km-analisis.entity';
import { ResumenElectrica }     from    '@modules/kilometers/modules/resumen-electrica/entities/resumen-electrica.entity';
import { Ruta }                 from    '@modules/kilometers/modules/rutas/entities/ruta.entity';
import { Circulacion }          from    '@modules/kilometers/modules/rutas/entities/circulacion.entity';
import { HorariosIitinerario }  from    '@modules/kilometers/modules/itinerarios/entities/horarios-itinerario.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mssql',
      host: process.env.DBSERVER,
      port: parseInt(process.env.DBPORT),
      username: process.env.DBUSER,
      password: process.env.DBPASS,
      database: process.env.DBNAME,
      synchronize: true, 
      options: { encrypt: false },
      entities: [
        Criterio,
        Itinerario,
        Ruta,
        InformeGeneral,
        KmAnalisis,
        ResumenElectrica,
        Circulacion,
        HorariosIitinerario
      ],
    }),
  ],
  controllers: [],
  providers: [],
})
export class DatabaseModule {}
