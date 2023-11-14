import { PartialType } from '@nestjs/swagger';
import { CreateFestivoDto } from './create-festivo.dto';

export class UpdateFestivoDto extends PartialType(CreateFestivoDto) {}
