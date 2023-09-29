import { ApiProperty } from "@nestjs/swagger"
import { IsNumber, IsString } from "class-validator"

export class UpdateKmAnalisiDto {
    
    @ApiProperty()
    @IsNumber()
    km1: number

    @ApiProperty()
    @IsNumber()
    km2: number

    @ApiProperty()
    @IsNumber()
    km3: number

    @ApiProperty()
    @IsNumber()
    km4: number

    @ApiProperty()
    @IsString()
    obs: string
}
