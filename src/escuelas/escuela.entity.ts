import { Ciudad } from "src/ciudades/ciudad.entity";
import { Estudiante } from "src/estudiantes/estudiante.entity";
import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, ManyToOne, OneToMany } from "typeorm"

@Entity('escuelas')
export class Escuela {

    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    public school: string;

    @Column()
    public adress: string;

    @Column()
    public town: string;

    @Column()
    public province: string;

    @Column()
    public schoolId: number;

    @Column()
    public cityId: number;

    

    @ManyToOne(() => Ciudad, ciudad => ciudad.escuelas)
    @JoinColumn({ name: "cityId" })
    public ciudades: Ciudad;

    @OneToMany(() => Estudiante, estudiante => estudiante.escuelas)
    public estudiantes: Estudiante[];
}