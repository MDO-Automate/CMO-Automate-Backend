import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Criterio } from 'src/modules/criterios/entities/criterio.entity';
import { InformeGeneral } from 'src/modules/informe-general/entities/informe-general.entity';
import { Itinerario } from 'src/modules/itinerarios/entities/itinerario.entity';
import { KmAnalisis } from 'src/modules/km-analisis/entities/km-analisis.entity';
import { Prueba } from 'src/modules/prueba/entities/prueba.entity';
import { ResumenElectrica } from 'src/modules/resumen-electrica/entities/resumen-electrica.entity';
import { Ruta } from 'src/modules/rutas/entities/ruta.entity';

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
        Prueba,
        Criterio,
        Itinerario,
        Ruta,
        InformeGeneral,
        KmAnalisis,
        ResumenElectrica,
      ],
    }),
  ],
  controllers: [],
  providers: [],
})
export class DatabaseModule {}
