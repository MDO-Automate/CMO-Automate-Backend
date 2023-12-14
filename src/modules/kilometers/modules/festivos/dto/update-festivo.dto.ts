import { ApiProperty } from '@nestjs/swagger'
import { IsString } from 'class-validator'

export class UpdateFestivoDto {
    
    @ApiProperty()
    @IsString()
    nombre: string

}
