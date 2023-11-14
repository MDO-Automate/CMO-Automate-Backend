import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class Festivos {
    
    @PrimaryColumn( { type: 'date' } ) fecha: string

    @Column() nombre: string
}
