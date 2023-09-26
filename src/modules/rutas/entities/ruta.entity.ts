import { Itinerario } from 'src/modules/itinerarios/entities/itinerario.entity';
import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

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

    @OneToMany(() => Itinerario, Itinerario => Itinerario.id)
    @JoinColumn() itinerario1: Itinerario

    @OneToMany(() => Itinerario, Itinerario => Itinerario.id)
    @JoinColumn() itinerario2: Itinerario

    @OneToMany(() => Itinerario, Itinerario => Itinerario.id)
    @JoinColumn() itinerario3: Itinerario

    @OneToMany(() => Itinerario, Itinerario => Itinerario.id)
    @JoinColumn() itinerario4: Itinerario

    @Column({ type: 'time' }) inicioHabil: string

    @Column({ type: 'time' }) inicioSabado: string

    @Column({ type: 'time' }) inicioDomingo: string

    @Column({ type: 'time' }) finHabil: string

    @Column({ type: 'time' }) finSabado: string

    @Column({ type: 'time' }) finDomingo: string
}