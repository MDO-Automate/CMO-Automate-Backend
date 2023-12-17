import { Module } from '@nestjs/common';
import { ItinerariosService } from './services/itinerarios.service';
import { ItinerariosController } from './controllers/itinerarios.controller';
import { Itinerario } from './entities/itinerario.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HorariosItinerarioService } from './services/horarios-itinerarios.service';
import { HorariosItinerario } from './entities/horarios-itinerario.entity';
import { RutasModule } from '../rutas/rutas.module';
import { RutasService } from '../rutas/services/rutas.service';
import { HorariosItinerariosController } from './controllers/horarios-itinerarios.controller';

@Module({
  imports: [ 
    TypeOrmModule.forFeature([Itinerario, HorariosItinerario]),
    RutasModule
 ],
  exports: [ TypeOrmModule ],
  controllers: [ItinerariosController, HorariosItinerariosController],
  providers: [ItinerariosService, HorariosItinerarioService, RutasService],
})
export class ItinerariosModule {}
