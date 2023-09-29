import { ApiProperty } from "@nestjs/swagger"
import { IsNumber, IsString } from "class-validator"
import { Ruta } from "src/modules/rutas/entities/ruta.entity"

export class UpdateResumenElectricaDto {

    @ApiProperty()
    @IsNumber()
    linea: Ruta

    @ApiProperty()
    @IsString()
    calendario: string

    @ApiProperty()
    @IsString()
    dia: string

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
    total: number
}
