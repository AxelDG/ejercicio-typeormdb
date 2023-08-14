import { Escuela } from "src/escuelas/escuela.entity";
import { Estudiante } from "src/estudiantes/estudiante.entity";
import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinColumn } from "typeorm"

@Entity('grados')
export class Grado {

    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    public name: string;

    @Column()
    public schoolId: number

    @Column()
    public teacherId: number

    @ManyToMany(() => Escuela, escuela => escuela.estudiantes)
    @JoinColumn({ name: "schoolId" })
    public escuelas: Escuela;

    @ManyToMany(() => Estudiante, estudiante => estudiante.grados)
    estudiantes: Estudiante[];
}