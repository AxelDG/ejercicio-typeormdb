import { Entity, Column, PrimaryGeneratedColumn} from "typeorm"

@Entity('profesores')
export class Profesor{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    lastname: string;

    @Column()
    age: number;

    @Column()
    schoolgrade: number;
}