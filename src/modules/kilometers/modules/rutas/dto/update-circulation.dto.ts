import { ApiProperty } from '@nestjs/swagger'
import { IsNumber } from 'class-validator'
import { Ruta } from '../entities/ruta.entity'

export class UpdateCirculationDTO {

    @ApiProperty()
    @IsNumber()
    circulacion: number

    @ApiProperty()
    @IsNumber()
    linea: Ruta
}
