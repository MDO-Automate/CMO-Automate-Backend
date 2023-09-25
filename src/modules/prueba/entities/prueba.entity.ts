import {  Entity , Column, PrimaryGeneratedColumn  } from 'typeorm'

@Entity()
export class Prueba {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    nombre: string

    @Column()
    apellido: string

    @Column()
    edad: number

}
