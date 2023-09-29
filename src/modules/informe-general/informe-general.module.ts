import { Module } from '@nestjs/common';
import { InformeGeneralService } from './informe-general.service';
import { InformeGeneralController } from './informe-general.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InformeGeneral } from './entities/informe-general.entity';

@Module({
  controllers: [InformeGeneralController],
  providers: [InformeGeneralService],
  imports: [ TypeOrmModule.forFeature([InformeGeneral]) ],
  exports: [ TypeOrmModule ],
})
export class InformeGeneralModule {}
