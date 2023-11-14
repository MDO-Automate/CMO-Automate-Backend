import { ApiProperty } from '@nestjs/swagger'
import { IsOptional, IsString } from 'class-validator'


export class CreateIncidenciaDTO {
    @ApiProperty()
    @IsString()
    @IsOptional()
    id: number

    @ApiProperty()
    @IsString()
    nombre: string
}