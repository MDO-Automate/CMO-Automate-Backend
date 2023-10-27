import { ApiProperty } from '@nestjs/swagger'
import { UpdateGeneralDataDto } from './update-general-dataArray.dto';
import { IsArray } from 'class-validator';

export class UpdateGeralDataDtoArray {
    @ApiProperty({ type: [ UpdateGeneralDataDto ] })
    @IsArray()
    data: UpdateGeneralDataDto[]

}
