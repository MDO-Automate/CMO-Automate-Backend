import { ApiProperty } from '@nestjs/swagger'
import { IsArray } from 'class-validator'
import { CreateKmAnalisiArrayDto } from './create-km-analisisArray.dto'

export class UpdateKmAnalisiDto {
    
    @ApiProperty({ type: [ CreateKmAnalisiArrayDto ] })
    @IsArray()
    data: CreateKmAnalisiArrayDto[]
}
