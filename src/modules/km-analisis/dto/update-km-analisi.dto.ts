import { PartialType } from '@nestjs/mapped-types';
import { CreateKmAnalisiDto } from './create-km-analisi.dto';

export class UpdateKmAnalisiDto extends PartialType(CreateKmAnalisiDto) {}
