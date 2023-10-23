import { ApiProperty } from '@nestjs/swagger'
import { CreateKmAnalisiArrayDto } from './create-km-analisisArray.dto';
import { IsArray } from 'class-validator';

export class CreateKmAnalisiDto {

    @ApiProperty({ type: [ CreateKmAnalisiArrayDto ] })
    @IsArray()
    data: CreateKmAnalisiArrayDto[]

}
