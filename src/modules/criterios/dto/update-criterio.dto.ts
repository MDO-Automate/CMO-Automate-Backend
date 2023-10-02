import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";


export class UpdateCriterioDto {
    @ApiProperty()
    @IsString()
    nombre: string
}
