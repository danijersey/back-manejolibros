import { Injectable } from '@nestjs/common';
import { ManejoLibroRepository } from './repositorios/manejo-libro.repository';
import { ActualizarLibroDto, CrearLibroDto, EliminarLibroDto } from './dto/libros.dto';

@Injectable()
export class ManejoLibroService {

    constructor(private ManejoLibroRepository:ManejoLibroRepository){}
    async ListarLibros(){
       return await this.ManejoLibroRepository.ListarLibros()
    }

    async CrearLibro(CrearLibroDto:CrearLibroDto){
        return await this.ManejoLibroRepository.CrearLibro(CrearLibroDto)
    }

    async ActualizarLibro(ActualizarLibroDto:ActualizarLibroDto){
        return await this.ManejoLibroRepository.ActualizarLibro(ActualizarLibroDto)
    }

    async EliminarLibro(EliminarLibroDto:EliminarLibroDto){
        return await this.ManejoLibroRepository.EliminarLibro(EliminarLibroDto)

    }
}
