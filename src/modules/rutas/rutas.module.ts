import { Module } from '@nestjs/common';
import { RutasService } from './rutas.service';
import { RutasController } from './rutas.controller';
import { Ruta } from './entities/ruta.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [ TypeOrmModule.forFeature([Ruta]) ],
  exports: [ TypeOrmModule ],
  controllers: [RutasController],
  providers: [RutasService],
})
export class RutasModule {}
