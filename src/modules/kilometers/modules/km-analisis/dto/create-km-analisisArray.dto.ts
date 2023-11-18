import { Ruta } from '../../rutas/entities/ruta.entity'
import { ApiProperty } from '@nestjs/swagger'
import { IsBoolean, IsNumber, IsOptional, IsString } from 'class-validator'
import { Itinerario } from '../../itinerarios/entities/itinerario.entity'
import { KmIncidencia } from '../entities/km-incidencias.entity'

export class CreateKmAnalisiArrayDto {

    @ApiProperty()
    @IsString()
    @IsOptional()
    id: number

    @ApiProperty()
    @IsString()
    idSae: string

    @ApiProperty()
    @IsString()
    vehiculo: string

    @ApiProperty()
    @IsString()
    tipo: string

    @ApiProperty()
    @IsString()
    empleado: string

    @ApiProperty({ type: 'string' })
    @IsNumber()
    linea: Ruta

    @ApiProperty({ type: 'number' }) 
    @IsNumber()
    itinerario: Itinerario

    @ApiProperty()
    @IsString()
    horaSalida: string

    @ApiProperty()
    @IsString()
    ht: string

    @ApiProperty()
    @IsString()
    inicioServicio: string

    @ApiProperty()
    @IsString()
    finServicio: string

    @ApiProperty()
    @IsString()
    tiempoViaje: string

    @ApiProperty()
    
    @IsNumber()
    distancia: number

    @ApiProperty()  
    @IsNumber()
    retraso: number

    @ApiProperty()
    @IsString()
    expedicion: string

    @ApiProperty()
    @IsString()
    inicioServicioEfectivo: string

    @ApiProperty()
    @IsString()
    finServicioEfectivo: string

    @ApiProperty()
    @IsString()
    tiempoEfectivo: string

    @ApiProperty()
    @IsNumber()
    retrasoE: number

    @ApiProperty()
    @IsNumber() 
    pmr: number
    
    @ApiProperty()
    @IsString()
    porcParada: string
    
    @ApiProperty()
    @IsString()
    porcDistancia: string
    
    @ApiProperty()
    @IsString()
    porcTiempo: string

    
    @ApiProperty()
    @IsOptional()
    @IsNumber() 
    km1: number

    
    @ApiProperty()
    @IsOptional()
    @IsNumber() 
    km2: number

    
    @ApiProperty()
    @IsOptional()
    @IsNumber() 
    km3: number

    
    @ApiProperty()
    @IsOptional()
    @IsNumber() 
    km4: number

    @ApiProperty()
    @IsNumber() 
    media: number
    
    @ApiProperty()
    @IsOptional()
    @IsBoolean()
    minor500: boolean
    
    @ApiProperty()
    @IsOptional()
    @IsBoolean()
    distanciaYMedia: boolean
    
    @ApiProperty()
    @IsOptional()
    @IsBoolean()
    distanciaYParadas: boolean
    
    @ApiProperty()
    @IsOptional()
    @IsBoolean()
    fueraHorario: boolean

    @ApiProperty()
    @IsOptional()
    @IsBoolean()
    malEnrutado: boolean

    @IsOptional()
    @ApiProperty()
    @IsString()
    fecha: string

    @IsOptional()
    @ApiProperty()
    @IsString()
    obs: string

    @IsOptional()
    @ApiProperty()
    @IsString()
    incidencia: KmIncidencia

}
