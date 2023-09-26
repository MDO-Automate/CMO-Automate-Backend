import { Module } from '@nestjs/common';
import { InformeGeneralService } from './informe-general.service';
import { InformeGeneralController } from './informe-general.controller';

@Module({
  controllers: [InformeGeneralController],
  providers: [InformeGeneralService],
})
export class InformeGeneralModule {}
