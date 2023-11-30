import { ApiProperty } from '@nestjs/swagger'
import { IsString } from 'class-validator'


export class CreateIncidenciaDTO {

    @ApiProperty()
    @IsString()
    nombre: string
}