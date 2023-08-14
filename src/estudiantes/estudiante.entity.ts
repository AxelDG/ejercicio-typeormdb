import { Grado } from "src/grados/grado.entity";
import { Escuela } from "src/escuelas/escuela.entity";
import { Profesor } from "src/profesores/profesor.entity";
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, ManyToMany } from "typeorm"


@Entity('estudiantes')
export class Estudiante {

    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    public name: string;

    @Column()
    public lastname: string;

    @Column({ type: 'date' })
    public birthdate: Date;

    @Column()
    public grade: number;

    @Column()
    public schoolId: number;

    @ManyToOne(() => Escuela, escuela => escuela.estudiantes)
    @JoinColumn({ name: "schoolId" })
    public escuelas: Escuela;   

    @ManyToOne(() => Profesor, profesor => profesor.estudiantes)
    @JoinColumn({ name: "teacherId" })
    public profesores: Profesor;

    @ManyToMany(() => Grado, grado => grado.estudiantes)
    public grados: Grado[];

}