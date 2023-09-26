import { BadRequestException } from '@nestjs/common';

export const fileFilterXSL = (_, file, cb) => {
  if (!file.originalname.match(/\.(xls)$/)) {
    return cb(new BadRequestException('Solo se permiten archivos .xls'), false);
  }
  return cb(null, true)
}