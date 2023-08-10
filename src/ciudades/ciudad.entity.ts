import { Escuela } from "src/escuelas/escuela.entity";
import { Entity, Column, PrimaryGeneratedColumn, OneToMany} from "typeorm"

@Entity('ciudades')
export class Ciudad {

    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    public province: string;

    @Column()
    public city: string;

    @Column()
    public postalcode: number;

    @OneToMany(() => Escuela, escuela => escuela.ciudades)
    public escuelas: Escuela[];
}
