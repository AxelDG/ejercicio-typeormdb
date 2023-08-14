import { Escuela } from "src/escuelas/escuela.entity";
import { Estudiante } from "src/estudiantes/estudiante.entity";
import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable, ManyToOne, JoinColumn} from "typeorm"

@Entity('profesores')
export class Profesor{

    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    public teacherName: string;

    @Column()
    public teacherLastname: string;

    @Column()
    public schoolGrade: number;

    @Column()
    public schoolId: number;

    @Column()
    public teacherId: number;

    @ManyToMany(() => Escuela, escuela => escuela.profesores)
    @JoinTable()
    public escuelas: Escuela[];

    @ManyToOne(() => Estudiante, estudiante => estudiante.profesores)
    @JoinColumn({ name: "teacherId" })
    public estudiantes: Estudiante[];
}