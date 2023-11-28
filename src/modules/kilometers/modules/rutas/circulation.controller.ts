
import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CirculationService } from './circulation.service';
import { CreateCirculationDTO } from './dto/create-circulation.dto';
import { UpdateCirculationDTO } from './dto/update-circulation.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Circulación')
@Controller('circulacion')
export class CirculationController {

    constructor(private circulationService: CirculationService ){}

    @Get()
    getCirculations(){
        return this.circulationService.getAllCirculations()
    }
    
    @Get('/:name')
    getCirculationsByName(@Param('name') name : number){
        return this.circulationService.getCirculationByName(name)
    }

    @Post()
    create(@Body() createCirculationDto: CreateCirculationDTO ){
        return this.circulationService.create(createCirculationDto)
    }

    @Patch('/:id')
    updateCirculations(@Param('id') id: number, @Body() updateCirculationDTO: UpdateCirculationDTO ){
        return this.circulationService.update(id, updateCirculationDTO)
    }

    @Delete('/:id')
    deleteCirculations(@Param('id') id: number){
        return this.circulationService.remove(id)
    }


}