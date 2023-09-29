import { ApiProperty } from "@nestjs/swagger"
import { IsNumber, IsString } from "class-validator"
import { Ruta } from "src/modules/rutas/entities/ruta.entity"

export class CreateInformeGeneralDto {
    @ApiProperty()
    @IsString()
    fecha: string

    @ApiProperty()
    @IsNumber()
    linea: Ruta

    @ApiProperty()
    @IsNumber()
    itinerario1: number

    @ApiProperty()
    @IsNumber()
    itinerario2: number
    
    @ApiProperty()
    @IsNumber()
    itinerario3: number

    @ApiProperty()
    @IsNumber()
    itinerario4: number

    @ApiProperty()
    @IsNumber()
    totalConElect: number

    @ApiProperty()
    @IsNumber()
    datos: number

    @ApiProperty()
    @IsNumber()
    total: number

    @ApiProperty()
    @IsNumber()
    flotaElect: number

    @ApiProperty()
    @IsNumber()
    totalSinElect: number
}
