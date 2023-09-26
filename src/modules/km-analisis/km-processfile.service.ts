import { Injectable } from '@nestjs/common';
import { getDataKm } from 'src/utils/getDataKM';
import * as xlsx from 'xlsx'

@Injectable()
export class KmProcessFileService {

    getProcessedData(file: any){
        return this.getDataFromFile(file)
    }

    getDataFromFile(file: any){
        const workbook = xlsx.read(file.buffer, { type: 'buffer' })
        const sheetName = workbook.SheetNames[0]
        const sheet = workbook.Sheets[sheetName]
        const dataJson = xlsx.utils.sheet_to_json(sheet);
        return getDataKm(dataJson)
    }

}
