import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Criterio {
    @PrimaryGeneratedColumn() id: number

    @Column() nombre: string
}
