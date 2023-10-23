import { Ruta } from '../../rutas/entities/ruta.entity';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';

@Entity()
export class ResumenElectrica {
    @PrimaryColumn({type: 'date'}) fecha: string

    @ManyToOne(()=> Ruta, ruta => ruta.id)
    @JoinColumn() linea: Ruta

    @Column() mdo109: number

    @Column() mdo110: number

    @Column() mdo111: number

    @Column() mdo112: number

    @Column('double precision', { precision: 53 }) totalM: number
    
    @Column('double precision', { precision: 53 }) totalKm: number

}
