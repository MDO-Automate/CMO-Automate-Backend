import { json } from 'express';
import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
import swaggerStart from './config/features/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(json({ limit: '100mb' }))
  app.enableCors({
    origin: '*'
  })
  swaggerStart(app)
  app.useGlobalPipes( 
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    })
   )
  await app.listen(3000);
}

bootstrap();
