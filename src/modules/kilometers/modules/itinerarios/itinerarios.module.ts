import { Module } from '@nestjs/common';
import { ItinerariosService } from './itinerarios.service';
import { ItinerariosController } from './itinerarios.controller';
import { Itinerario } from './entities/itinerario.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [ TypeOrmModule.forFeature([Itinerario]) ],
  exports: [ TypeOrmModule ],
  controllers: [ItinerariosController],
  providers: [ItinerariosService],
})
export class ItinerariosModule {}
