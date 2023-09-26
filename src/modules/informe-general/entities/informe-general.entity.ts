import { Ruta } from 'src/modules/rutas/entities/ruta.entity';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class InformeGeneral {
    @PrimaryGeneratedColumn() fecha: string

    @ManyToOne(()=> Ruta, ruta => ruta.id)
    @JoinColumn() linea: Ruta

    @Column() itinerario1: number

    @Column() itinerario2: number
    
    @Column() itinerario3: number

    @Column() itinerario4: number

    @Column() totalConElect: number

    @Column() datos: number

    @Column() total: number

    @Column() flotaElect: number

    @Column() totalSinElect: number
}
