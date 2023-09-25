import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Prueba } from 'src/modules/prueba/entities/prueba.entity';

@Module({
    imports: [TypeOrmModule.forRoot({
        type: 'mssql',
        host: process.env.DBSERVER,
        port: parseInt(process.env.DBPORT),  
        username: process.env.DBUSER,
        password: process.env.DBPASS,
        database: process.env.DBNAME,
        synchronize: true,
        options: { encrypt: false },
        entities : [ Prueba ]
    })],
    controllers: [],
    providers: [],
})
export class DatabaseModule {}
