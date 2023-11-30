import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';
import { Itinerario } from '../entities/itinerario.entity';
import { Ruta } from '../../rutas/entities/ruta.entity';

export class CreateHorariosItinerarioDto {

    @ApiProperty()
    @IsNumber()
    linea: Ruta

    @ApiProperty()
    @IsNumber()
    itinerario: Itinerario

    @ApiProperty()
    @IsString()
    sentido: string

    @ApiProperty()
    @IsString()
    lvInicio: string
    
    @ApiProperty()
    @IsString()
    lvFin: string
    
    @ApiProperty()
    @IsString()
    sInicio: string
    
    @ApiProperty()
    @IsString()
    sFin: string
    
    @ApiProperty()
    @IsString()
    dInicio: string
    
    @ApiProperty()
    @IsString()
    dFin: string

}
