import { ApiProperty } from '@nestjs/swagger'
import { IsString } from 'class-validator'


export class UpdateIncidenciaDTO {

    @ApiProperty()
    @IsString()
    nombre: string
}