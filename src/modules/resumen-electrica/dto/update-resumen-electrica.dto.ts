import { PartialType } from '@nestjs/mapped-types';
import { CreateResumenElectricaDto } from './create-resumen-electrica.dto';

export class UpdateResumenElectricaDto extends PartialType(CreateResumenElectricaDto) {}
