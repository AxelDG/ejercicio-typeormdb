import { Escuela } from "src/escuelas/escuela.entity";
import { Estudiante } from "src/estudiantes/estudiante.entity";
import { Profesor } from "src/profesores/profesor.entity";
import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinColumn, ManyToOne, JoinTable } from "typeorm"

@Entity('clases')
export class Clase {

    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    public name: string;

    @Column()
    public schoolId: number;

    @Column()
    public teacherId: number;

    @ManyToOne(() => Escuela, escuela => escuela.clases)
    @JoinColumn({ name: "schoolId" })
    public escuelas: Escuela;

    @ManyToMany(() => Estudiante, estudiante => estudiante.clases)
    @JoinTable()
    public estudiantes: Estudiante[];

    @ManyToOne(() => Profesor, profesor => profesor.clases)
    @JoinColumn({ name: "teacherId"})
    public profesores: Profesor[];
}