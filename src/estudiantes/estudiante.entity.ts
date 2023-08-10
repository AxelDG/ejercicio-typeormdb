import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"

@Entity('estudiantes')
export class Estudiante{

    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    public name: string;

    @Column()
    public lastname: string;

    @Column()
    public age: number;

    @Column()
    public schoolgrade: number;
}