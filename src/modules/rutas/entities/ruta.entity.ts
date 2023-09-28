import { Itinerario } from 'src/modules/itinerarios/entities/itinerario.entity';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Ruta {
    @PrimaryGeneratedColumn() id: number

    @Column() nombre: string

    @Column() kmItinerario1: number

    @Column() kmItinerarioRepro1: number

    @Column() kmItinerario2: number

    @Column() kmItinerarioRepro2: number

    @Column() kmItinerario3: number

    @Column() kmItinerarioRepro3: number

    @Column() kmItinerario4: number

    @Column() kmItinerarioRepro4: number

    @ManyToOne(() => Itinerario, Itinerario => Itinerario.id)
    @JoinColumn({ name: 'itinerario1' }) itinerario1: Itinerario

    @ManyToOne(() => Itinerario, Itinerario => Itinerario.id)
    @JoinColumn({ name: 'itinerario2' }) itinerario2: Itinerario

    @ManyToOne(() => Itinerario, Itinerario => Itinerario.id)
    @JoinColumn({ name: 'itinerario3' }) itinerario3: Itinerario

    @ManyToOne(() => Itinerario, Itinerario => Itinerario.id)
    @JoinColumn({ name: 'itinerario4' }) itinerario4: Itinerario

    @Column({ type: 'time' }) inicioHabil: string

    @Column({ type: 'time' }) inicioSabado: string

    @Column({ type: 'time' }) inicioDomingo: string

    @Column({ type: 'time' }) finHabil: string

    @Column({ type: 'time' }) finSabado: string

    @Column({ type: 'time' }) finDomingo: string
}
