import { BadRequestException } from "@nestjs/common"
import { FOREIGNKEY } from "./errosCodes"

export const errorHandlerForeignkey = (err: any, entity: string)=> {
    if(err.number === FOREIGNKEY){
        throw new BadRequestException(
          `Este item de ${entity} se encuentra en uso en otra tabla.`, 
          'FOREIGNKEY'
          )
      }
}