import { BadRequestException, Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm';
import { KmIncidencia } from '../entities/km-incidencias.entity';
import { Repository } from 'typeorm';
import { CreateIncidenciaDTO } from '../dto/create-km-incidencia.dto';
import { UpdateIncidenciaDTO } from '../dto/update-km-incidencia.dto';
import { errorHandlerForeignkey } from '@utils/errosHandler';

@Injectable()
export class KmIncidenciaServices {

    constructor(
        @InjectRepository( KmIncidencia )  
        private kmInicidenciaRepository: Repository<KmIncidencia>
    ){}

    findAll() {
        return this.kmInicidenciaRepository.find()
    }

    findByName(nombre: string) {
        return this.kmInicidenciaRepository.findBy({ nombre })
    }

    findOne(id: number) {
        return this.kmInicidenciaRepository.findBy({id})
    }
    
    async create(createIncidenciaDTO: CreateIncidenciaDTO) {
        const create = this.kmInicidenciaRepository.create(createIncidenciaDTO)
        const incidenciasFound = await this.findByName(create.nombre)
        if (incidenciasFound.length > 0) {
            throw new BadRequestException('Ya existe una incidencia con ese ID')
        }
        return this.kmInicidenciaRepository.save(create)
    }

    async update(id: number, updateIncidenciaDTO: UpdateIncidenciaDTO) {
        const incidenciasFound = await this.findOne(id)
        if (incidenciasFound.length < 1) {
            throw new BadRequestException('No se encontró una incidencia con ese ID')
        }
        const update = this.kmInicidenciaRepository.create(updateIncidenciaDTO)
        try {
            this.kmInicidenciaRepository.update({id}, update)
            return updateIncidenciaDTO
        } catch (err) {
            throw new BadRequestException(err)
        }
    }

    async remove(id: number) {
        const incidenciasFound = await this.findOne(id)
        if (incidenciasFound.length < 1) {
            throw new BadRequestException('No se encontró una incidencia con ese ID')
        }
        try {
            await this.kmInicidenciaRepository.delete({id})
            return {
                status: 200,
                message: `Se ha eliminado el ID ${id}`
            }
        } catch (err) {
            errorHandlerForeignkey(err, 'incidencia')
            throw new BadRequestException(err)
        }
    }

}