import { Clase } from "src/clases/clase.entity";
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

    @ManyToMany(() => Clase, clase => clase.estudiantes)
    public clases: Clase[];

}