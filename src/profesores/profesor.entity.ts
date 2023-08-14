import { Grado } from "src/grados/grado.entity";
import { Entity, Column, PrimaryGeneratedColumn, OneToMany} from "typeorm"

@Entity('profesores')
export class Profesor{

    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    public teacherName: string;

    @Column()
    public teacherLastname: string;

    @OneToMany(() => Grado, grado => grado.profesores)
    public grados: Grado[];
}