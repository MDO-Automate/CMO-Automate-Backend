import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm';
import { KmIncidencia } from './entities/km-incidencias.entity';
import { Repository } from 'typeorm';
import { CreateIncidenciaDTO } from './dto/create-km-incidencia.dto';

@Injectable()
export class KmIncidenciaServices {

    constructor(
        @InjectRepository( KmIncidencia )  
        private kmInicidenciaRepository: Repository<KmIncidencia>
    ){}

    save(createIncidenciaDTO:CreateIncidenciaDTO){
        const dataSave = this.kmInicidenciaRepository.create(createIncidenciaDTO)
        return this.kmInicidenciaRepository.save(dataSave)
    }   

    findAll(){
        return this.kmInicidenciaRepository.find()
    }
    
}