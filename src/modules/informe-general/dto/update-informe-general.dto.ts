import { PartialType } from '@nestjs/mapped-types';
import { CreateInformeGeneralDto } from './create-informe-general.dto';

export class UpdateInformeGeneralDto extends PartialType(CreateInformeGeneralDto) {}
