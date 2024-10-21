import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CrearLibroDto{
    @IsNotEmpty({message:'El nombre viene vacio'})
    @IsString({message:'El nombre no puede ser un numero'})
    Nombre:string;
}

export class ActualizarLibroDto{
    @IsNotEmpty({message:'El Id viene vacio'})
    @IsNumber({}, {message:'El Id no puede ser un numero'})
    Id:number;

    @IsNotEmpty({message:'El nombre viene vacio'})
    @IsString({message:'El nombre no puede ser un numero'})
    Nombre:string;
}

export class EliminarLibroDto{
    @IsNotEmpty({message:'El Id viene vacio'})
    @IsNumber({},{message:'El Id no es un numero'})
    Id:number;
}