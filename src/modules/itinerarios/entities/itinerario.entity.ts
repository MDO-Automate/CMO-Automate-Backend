import { Column, PrimaryGeneratedColumn } from 'typeorm'

export class Itinerario {
    @PrimaryGeneratedColumn() id: number

    @Column() nombre: string
}
