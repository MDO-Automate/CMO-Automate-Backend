import { ApiProperty } from '@nestjs/swagger'
import { IsOptional, IsString } from 'class-validator'


export class UpdateIncidenciaDTO {

    @ApiProperty()
    @IsString()
    nombre: string
}