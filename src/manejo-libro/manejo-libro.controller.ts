import { Body, Controller, Delete, Get, HttpException, HttpStatus, Post, Put } from '@nestjs/common';
import { ManejoLibroService } from './manejo-libro.service';
import { ActualizarLibroDto, CrearLibroDto, EliminarLibroDto } from './dto/libros.dto';

@Controller('manejo-libro')
export class ManejoLibroController {

    constructor(private readonly manejoLibroService: ManejoLibroService) {}

    @Get('')
    async ListarLibros() {
        try {
            const libros = await this.manejoLibroService.ListarLibros();
            return libros;
        } catch (error) {
            throw new HttpException({
                status: HttpStatus.BAD_REQUEST,
                error: 'Error al listar los libros',
            }, HttpStatus.BAD_REQUEST);
        }
    };

    @Post('/crear')
    async CrearLibro(@Body() CrearLibroDto:CrearLibroDto){ 
        try{
        const libroNuevo = await this.manejoLibroService.CrearLibro(CrearLibroDto)
        return libroNuevo;
    } catch (error){
            throw new HttpException({
                status : HttpStatus.BAD_REQUEST,
                error : 'Error al crear el libro',
            },HttpStatus.BAD_REQUEST)
    }
    } 

    @Put('/actualizar')
    async ActualizarLibro(@Body() ActualizarLibroDto:ActualizarLibroDto){
        try{
        return await this.manejoLibroService.ActualizarLibro(ActualizarLibroDto)
    } catch (error){
        throw new HttpException ({
            status : HttpStatus.BAD_REQUEST,
            error: 'No se logro actualizar',
        },HttpStatus.BAD_REQUEST)
    }
    }

    @Delete('/eliminar')
    async EliminarLibro(@Body() EliminarLibroDto:EliminarLibroDto){
        try{
        return await this.manejoLibroService.EliminarLibro(EliminarLibroDto)
        } catch (error){
            throw new HttpException({
                status: HttpStatus.BAD_REQUEST,
                error: 'No se logro eliminar',
            },HttpStatus.BAD_REQUEST)
        }
    }

}
