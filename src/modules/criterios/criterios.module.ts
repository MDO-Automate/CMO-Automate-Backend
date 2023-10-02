import { Module } from '@nestjs/common';
import { CriteriosService } from './criterios.service';
import { CriteriosController } from './criterios.controller';
import { Criterio } from './entities/criterio.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [CriteriosController],
  providers: [CriteriosService],
  imports: [ TypeOrmModule.forFeature([Criterio]) ],
  exports: [ TypeOrmModule ],
})
export class CriteriosModule {}
