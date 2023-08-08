import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"

@Entity('estudiantes')
export class Estudiante{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    lastname: string;

    @Column()
    age: number;

    @Column()
    schoolgrade: number;
}