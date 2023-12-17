import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Itinerario } from './itinerario.entity';
import { Ruta } from '../../rutas/entities/ruta.entity';

@Entity()
export class HorariosItinerario {
    @PrimaryGeneratedColumn() id: number

    @ManyToOne(() => Ruta, ruta => ruta.id)
    @JoinColumn({ name: 'linea' }) linea: Ruta

    @ManyToOne(() => Itinerario, Itinerario => Itinerario.id)
    @JoinColumn({ name: 'itinerario' }) itinerario: Itinerario

    @Column() sentido: string

    @Column({ type: 'time' })   lvInicio: string

    @Column({ type: 'time'  })  lvFin: string

    @Column({ type: 'time'  })  sInicio: string

    @Column({ type: 'time'  })  sFin: string

    @Column({ type: 'time'  })  dInicio: string

    @Column({ type: 'time'  }) dFin: string
}