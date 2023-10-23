import { Ruta } from '../../rutas/entities/ruta.entity';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';

@Entity()
export class InformeGeneral {
    @PrimaryColumn() fecha: string

    @ManyToOne(()=> Ruta, ruta => ruta.id)
    @JoinColumn() linea: Ruta

    @Column('double precision', { precision: 53 }) itinerario1: number

    @Column('double precision', { precision: 53 }) itinerario2: number
    
    @Column('double precision', { precision: 53 }) itinerario3: number

    @Column('double precision', { precision: 53 }) itinerario4: number

    @Column() datos: number

    @Column('double precision', { precision: 53 }) total: number

    @Column('double precision', { precision: 53 }) totalT: number
    
    @Column('double precision', { precision: 53 }) flotaElect: number

    @Column('double precision', { precision: 53 }) totalSinElect: number
}
