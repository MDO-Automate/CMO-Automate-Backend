import { Itinerario } from '../../itinerarios/entities/itinerario.entity';
import { Ruta } from '../../rutas/entities/ruta.entity';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class KmAnalisis {
    @PrimaryGeneratedColumn() id: number

    @Column() idSae: string

    @Column() vehiculo: string
    
    @Column() tipo: string

    @Column() empleado: string

    @ManyToOne(() => Ruta, ruta => ruta.id)
    @JoinColumn({ name: 'linea' }) linea: Ruta

    @ManyToOne(() => Itinerario, Itinerario => Itinerario.id)
    @JoinColumn({ name: 'itinerario' }) itinerario: Itinerario

    @Column({ type: 'time' }) horaSalida: string

    @Column() ht: string

    @Column({ type: 'datetime' }) inicioServicio: string

    @Column({ type: 'datetime' }) finServicio: string

    @Column() tiempoViaje: string

    @Column() distancia: number

    @Column() retraso: number

    @Column({ type: 'time' }) expedicion: string

    @Column({ type: 'datetime' }) inicioServicioEfectivo: string

    @Column({ type: 'datetime' }) finServicioEfectivo: string

    @Column() tiempoEfectivo: string

    @Column() retrasoE: number

    @Column() pmr: number

    @Column() porcParada: string

    @Column() porcDistancia: string

    @Column() porcTiempo: string

    @Column({ default: 0 }) km1: number

    @Column({ default: 0 }) km2: number

    @Column({ default: 0 }) km3: number

    @Column({ default: 0 }) km4: number
    
    @Column({ default: 0 }) media: number

    @Column({ default: false }) minor500: boolean

    @Column({ default: false }) distanciaYMedia: boolean

    @Column({ default: false }) distanciaYParadas: boolean

    @Column({ default: false }) fueraHorario: boolean

    @Column({ type: 'date' }) fecha: string

    @Column({ default: '' }) obs: string
}
