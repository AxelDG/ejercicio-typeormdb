import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"

@Entity('ciudades')
export class Ciudad{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    province: string;

    @Column ()
    name: string

    @Column ({unique: true})
    postalcode: number
}