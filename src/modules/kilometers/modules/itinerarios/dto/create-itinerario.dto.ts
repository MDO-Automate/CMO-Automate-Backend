import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateItinerarioDto {
    @ApiProperty()
    @IsString()
    nombre: string
}
