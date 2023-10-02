import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateCriterioDto {
    @ApiProperty()
    @IsString()
    nombre: string

}
