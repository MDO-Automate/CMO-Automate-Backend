import { Module } from '@nestjs/common';

import { EnvironmentModule } from '@config/modules/environment.module';
import { DatabaseModule } from '@config/modules/database.module';

import { KilometersModule } from '@modules/kilometers/kilometers.module';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [EnvironmentModule, DatabaseModule, KilometersModule],
  controllers: [ AppController],
  providers: [AppService],
})
export class AppModule {}
