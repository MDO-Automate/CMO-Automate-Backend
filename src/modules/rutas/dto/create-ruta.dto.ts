import { ApiProperty } from '@nestjs/swagger'
import { IsNumber, IsString } from 'class-validator'
import { Itinerario } from 'src/modules/itinerarios/entities/itinerario.entity'

export class CreateRutaDto {

    @ApiProperty()
    @IsString()
    nombre: string

    @ApiProperty()
    @IsNumber()
    kmItinerario1: number

    @ApiProperty()
    @IsNumber()
    kmItinerarioRepro1: number

    @ApiProperty()
    @IsNumber()
    kmItinerario2: number

    @ApiProperty()
    @IsNumber()
    kmItinerarioRepro2: number

    @ApiProperty()
    @IsNumber()
    kmItinerario3: number

    @ApiProperty()
    @IsNumber()
    kmItinerarioRepro3: number

    @ApiProperty()
    @IsNumber()
    kmItinerario4: number

    @ApiProperty()
    @IsNumber()
    kmItinerarioRepro4: number

    @ApiProperty()
    @IsNumber()
    itinerario1: Itinerario

    @ApiProperty()
    @IsNumber()
    itinerario2: Itinerario

    @ApiProperty()
    @IsNumber()
    itinerario3: Itinerario

    @ApiProperty()
    @IsNumber()
    itinerario4: Itinerario

    @ApiProperty()
    @IsString()
    inicioHabil: string

    @ApiProperty()
    @IsString()
    inicioSabado: string

    @ApiProperty()
    @IsString()
    inicioDomingo: string

    @ApiProperty()
    @IsString()
    finHabil: string

    @ApiProperty()
    @IsString()
    finSabado: string

    @ApiProperty()
    @IsString()
    finDomingo: string

}
