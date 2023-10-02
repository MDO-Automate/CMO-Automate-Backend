import { Injectable } from '@nestjs/common'

@Injectable()
export class RutasService {
  
  create() {
    return 'This action adds a new ruta';
  }

  findAll() {
    return `This action returns all rutas`;
  }

  findOne(id: number) {
    return `This action returns a #${id} ruta`;
  }

  update(id: number) {
    return `This action updates a #${id} ruta`;
  }

  remove(id: number) {
    return `This action removes a #${id} ruta`;
  }


}
