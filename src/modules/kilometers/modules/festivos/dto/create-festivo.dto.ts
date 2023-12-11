import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateFestivoDto {

    @ApiProperty()
    @IsString()
    fecha: string

    @ApiProperty()
    @IsString()
    nombre: string

}

