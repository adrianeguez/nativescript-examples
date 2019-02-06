import {MiddlewareConsumer, Module, NestModule} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {TypeOrmModule} from '@nestjs/typeorm'
import { EmpresaModule } from './empresa/empresa.module';
import { SucursalModule } from './sucursal/sucursal.module';
import {checkJwt} from "./jwt-check";
import {EmpresaEntity} from "./empresa/empresa.entity";
import {SucursalEntity} from "./sucursal/sucursal.entity";

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: 'localhost',
            port: 32769,
            username: 'adrian',
            password: '12345678',
            database: 'nativescript',
            entities: [
                EmpresaEntity,
                SucursalEntity

            ],
            synchronize: true,
        }),
        EmpresaModule,
        SucursalModule,


    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule implements NestModule {

    configure(consumer: MiddlewareConsumer) {
        const routes = [
            'pene*',
            'sexo*',
            'sucursal*',
            'empresa*'
        ];

        routes
            .forEach(
                (ruta)=>{
                    consumer
                        .apply(
                            checkJwt
                        )
                        .forRoutes(ruta)
                }
            );

    }
}