import { Entity, Column, PrimaryGeneratedColumn} from "typeorm"

@Entity('profesores')
export class Profesor{

    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    public teacherName: string;

    @Column()
    public lastname: string;

    @Column()
    public schoolGrade: number;
}