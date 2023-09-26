import { Itinerario } from 'src/modules/itinerarios/entities/itinerario.entity';
import { Ruta } from 'src/modules/rutas/entities/ruta.entity';
import { Column, JoinColumn, OneToMany } from 'typeorm';

export class KmAnalisi {
    @Column() idSae: string

    @Column() vehiculo: string
    
    @Column() tipo: string

    @Column() empleado: string

    @OneToMany(() => Ruta, ruta => ruta.id)
    @JoinColumn() linea: Ruta

    @OneToMany(() => Itinerario, Itinerario => Itinerario.id)
    @JoinColumn() itinerario: Itinerario

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

    @Column() km1: number

    @Column() km2: number

    @Column() km3: number

    @Column() km4: number

    @Column() minor500: string

    @Column() distanciaYMedia: string

    @Column() distanciaYParadas: string

    @Column() fueraHorario: string

    @Column({ type: 'date' }) date: string

    @Column() obs: string
}
