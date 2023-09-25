import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber } from 'class-validator'

export class UpdatePruebaDto {
    @ApiProperty()
    @IsString()
    nombre: string
    @ApiProperty()
    @IsString()
    apellido: string
    @ApiProperty()
    @IsNumber()
    edad: number
}