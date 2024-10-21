import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Habilitar CORS para el puerto 4200
  app.enableCors({
    origin: 'http://localhost:4200', // Cambia esto si tu aplicación Angular corre en otro puerto o dominio
  });

  await app.listen(3000);
}
bootstrap();
