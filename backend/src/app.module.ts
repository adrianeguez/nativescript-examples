import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {TypeOrmModule} from '@nestjs/typeorm'
import { EmpresaModule } from './empresa/empresa.module';
import { SucursalModule } from './sucursal/sucursal.module';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: 'localhost',
            port: 32771,
            username: 'adrian',
            password: '12345678',
            database: 'nativescript',
            entities: [

            ],
            synchronize: true,
        }),
        EmpresaModule,
        SucursalModule,


    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
}
