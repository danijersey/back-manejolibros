import { Module } from '@nestjs/common';
import { ManejoLibroService } from './manejo-libro.service';
import { ManejoLibroController } from './manejo-libro.controller';
import { ManejoLibroRepository } from './repositorios/manejo-libro.repository';

@Module({
  providers: [ManejoLibroService,ManejoLibroRepository],
  controllers: [ManejoLibroController]
})
export class ManejoLibroModule {}
