import { Module } from '@nestjs/common';
import { CriteriosService } from './criterios.service';
import { CriteriosController } from './criterios.controller';

@Module({
  controllers: [CriteriosController],
  providers: [CriteriosService],
})
export class CriteriosModule {}
