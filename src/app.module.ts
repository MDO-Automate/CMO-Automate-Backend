import { EnvironmentModule } from './config/modules/environment.module';
import { DatabaseModule } from './config/modules/database.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PruebaModule } from './modules/prueba/prueba.module';

@Module({
  imports: [
    EnvironmentModule, 
    DatabaseModule,
    PruebaModule,
   ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
