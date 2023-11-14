import { Module } from '@nestjs/common';
import { FestivosService } from './festivos.service';
import { FestivosController } from './festivos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Festivos } from './entities/festivo.entity';

@Module({
  imports: [ 
    TypeOrmModule.forFeature([Festivos]),
  ],
  controllers: [FestivosController],
  providers: [FestivosService],
  exports: [ TypeOrmModule ]
})
export class FestivosModule {}
