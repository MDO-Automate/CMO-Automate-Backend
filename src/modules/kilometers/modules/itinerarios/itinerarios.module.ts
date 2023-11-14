import { Module } from '@nestjs/common';
import { ItinerariosService } from './itinerarios.service';
import { ItinerariosController } from './itinerarios.controller';
import { Itinerario } from './entities/itinerario.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HorariosIitinerarioService } from './horarios-itinerarios.service';
import { HorariosIitinerario } from './entities/horarios-itinerario.entity';
import { RutasModule } from '../rutas/rutas.module';
import { RutasService } from '../rutas/rutas.service';

@Module({
  imports: [ 
    TypeOrmModule.forFeature([Itinerario, HorariosIitinerario]),
    RutasModule
 ],
  exports: [ TypeOrmModule ],
  controllers: [ItinerariosController],
  providers: [ItinerariosService, HorariosIitinerarioService, RutasService],
})
export class ItinerariosModule {}
