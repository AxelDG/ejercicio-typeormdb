import { Escuela } from "src/escuelas/escuela.entity";
import { Estudiante } from "src/estudiantes/estudiante.entity";
import { Profesor } from "src/profesores/profesor.entity";
import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinColumn, ManyToOne, JoinTable } from "typeorm"

@Entity('grados')
export class Grado {

    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    public name: string;

    @Column()
    public schoolId: number;

    @Column()
    public teacherId: number;

    @ManyToOne(() => Escuela, escuela => escuela.grados)
    @JoinColumn({ name: "schoolId" })
    public escuelas: Escuela;

    @ManyToMany(() => Estudiante, estudiante => estudiante.grados)
    @JoinTable()
    public estudiantes: Estudiante[];

    @ManyToOne(() => Profesor, profesor => profesor.grados)
    @JoinColumn({ name: "teacherId"})
    public profesores: Profesor[];
}