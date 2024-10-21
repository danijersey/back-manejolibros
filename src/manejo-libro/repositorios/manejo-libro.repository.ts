import { Injectable } from "@nestjs/common";
import { LibroEntity } from "src/entitys/Libro.entity";
import { DataSource, EntityManager, Repository } from "typeorm";
import { ActualizarLibroDto, CrearLibroDto, EliminarLibroDto } from "../dto/libros.dto";

@Injectable()
export class ManejoLibroRepository extends Repository<LibroEntity>{
 
    constructor( private datasource:DataSource){
        super(LibroEntity,datasource.createEntityManager())
    }

    async ListarLibros(): Promise<LibroEntity[]>{
        return await this.find()
    }

    async CrearLibro(CrearLibroDto:CrearLibroDto):Promise<LibroEntity>{
        
        const repositorio = new LibroEntity();
        repositorio.Nombre = CrearLibroDto.Nombre;
        await this.create(repositorio)
        await this.save(repositorio)
        console.log(repositorio)
        return ;

    }

    async BuscarLibro(id:number): Promise<LibroEntity>{
        let repositorio = await this.findOne({where:{Id:id}});
        return repositorio;
    }

    async ActualizarLibro(ActualizarLibroDto:ActualizarLibroDto): Promise<LibroEntity>{
        let repositorio = await this.BuscarLibro(ActualizarLibroDto.Id)
        repositorio.Nombre=ActualizarLibroDto.Nombre;
        await this.save(repositorio)
        return repositorio;
    }

    async EliminarLibro(EliminarLibroDto:EliminarLibroDto){
        let repositorio = await this.BuscarLibro(EliminarLibroDto.Id)
        await this.remove(repositorio)
        return repositorio;
    }



}