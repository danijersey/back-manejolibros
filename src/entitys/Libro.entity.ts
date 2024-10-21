import { text } from "stream/consumers";
import { BaseEntity, Column, Entity,  PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class LibroEntity extends BaseEntity{

    @PrimaryGeneratedColumn()
    Id:number;

    @Column()
    Nombre:string;
}