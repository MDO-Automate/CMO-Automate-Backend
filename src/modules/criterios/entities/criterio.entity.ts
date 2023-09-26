import { Column, PrimaryGeneratedColumn } from 'typeorm'

export class Criterio {
    @PrimaryGeneratedColumn() id: number

    @Column() nombre: string
}
