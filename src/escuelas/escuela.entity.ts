import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"

@Entity('escuelas')
export class Escuela{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    adress: string;

    @Column()
    town: string;

    @Column ()
    province: string

    @Column ({unique: true})
    postalcode: number
}