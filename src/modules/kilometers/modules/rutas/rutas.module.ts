import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Ruta } from './entities/ruta.entity';
import { RutasService } from './rutas.service';
import { RutasController } from './rutas.controller';
import { RutasDetailsService } from './rutas-details.service';

@Module({
  imports: [ TypeOrmModule.forFeature([Ruta]) ],
  exports: [ TypeOrmModule ],
  controllers: [RutasController],
  providers: [RutasService, RutasDetailsService],
})
export class RutasModule {}
