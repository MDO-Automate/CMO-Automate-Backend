import { ApiProperty } from '@nestjs/swagger'
import { IsNumber, IsString } from 'class-validator'
import { Ruta } from '../../rutas/entities/ruta.entity'

export class CreateResumenElectricaDto {
    @ApiProperty()
    @IsString()
    fecha: string

    @ApiProperty({ type: 'string' })
    @IsString()
    linea: Ruta

    @ApiProperty()
    @IsNumber()
    mdo109: number

    @ApiProperty()
    @IsNumber()
    mdo110: number

    @ApiProperty()
    @IsNumber()
    mdo111: number

    @ApiProperty()
    @IsNumber()
    mdo112: number

    @ApiProperty()
    @IsNumber()
    totalKm: number

    @ApiProperty()
    @IsNumber()
    totalM: number
}
