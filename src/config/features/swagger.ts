import { INestApplication } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'

const configParams = {
    TITLE : 'CMO Automate API',
    DESCRIPTION: '',
    VERSION: '1.0'
}

const swaggerStart = (app: INestApplication<any>) => {

    const config = new DocumentBuilder()
    .setTitle(configParams.TITLE)
    .setDescription(configParams.DESCRIPTION)
    .setVersion(configParams.VERSION)
    .build()

    const document = SwaggerModule.createDocument(app, config)
    SwaggerModule.setup('/swagger-documentation', app, document)

}


export default swaggerStart
