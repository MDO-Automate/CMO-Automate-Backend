import { Ruta } from 'src/modules/rutas/entities/ruta.entity';
import { Column, JoinColumn, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

export class ResumenElectrica {
    @PrimaryGeneratedColumn() fecha: string

    @OneToMany(()=> Ruta, ruta => ruta.id)
    @JoinColumn() linea: Ruta

    @Column() calendario: string

    @Column() dia: string

    @Column() mdo109: number

    @Column() mdo110: number

    @Column() mdo111: number

    @Column() mdo112: number

    @Column() total: number

}
