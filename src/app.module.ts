import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ManejoLibroModule } from './manejo-libro/manejo-libro.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LibroEntity } from './entitys/Libro.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'libros-db',
      port: 3306,
      username: 'tu_usuario',
      password: 'tu_contraseña',
      database: 'nombre_de_tu_base_de_datos',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    })
    ,
    ManejoLibroModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
