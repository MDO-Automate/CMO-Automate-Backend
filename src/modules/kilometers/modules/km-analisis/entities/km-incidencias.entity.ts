import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class KmIncidencia {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    nombre: string
    
}