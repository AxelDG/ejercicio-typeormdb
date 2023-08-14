import { Grado } from "src/grados/grado.entity";
import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable } from "typeorm"


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
    public classId: number;

    @ManyToMany(() => Grado, grado => grado.estudiantes)
    public grados: Grado[];

}