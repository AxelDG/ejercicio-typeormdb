import { Clase } from "src/clases/clase.entity";
import { Entity, Column, PrimaryGeneratedColumn, OneToMany} from "typeorm"

@Entity('profesores')
export class Profesor{

    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    public teacherName: string;

    @Column()
    public teacherLastname: string;

    @OneToMany(() => Clase, clase => clase.profesores)
    public clases: Clase[];
}