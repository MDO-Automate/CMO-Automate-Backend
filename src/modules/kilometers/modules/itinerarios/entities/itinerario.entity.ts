import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Itinerario {
    @PrimaryGeneratedColumn() id: number

    @Column() nombre: string
}
