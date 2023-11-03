import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Ruta } from './ruta.entity';

@Entity()
export class Circulacion {
    @PrimaryGeneratedColumn() id: number

    @ManyToOne(() => Ruta, ruta => ruta.id)
    @JoinColumn({ name: 'linea' }) linea: Ruta

    @Column() circulacion: number
}