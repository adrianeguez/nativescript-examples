import {MiddlewareConsumer, Module, NestModule} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {TypeOrmModule} from '@nestjs/typeorm';
import {EmpresaModule} from './empresa/empresa.module';
import {EmpresaEntity} from './empresa/empresa.entity';
import {checkJwt} from '@manticore-labs/nest';
import * as jwksRsa from 'jwks-rsa';
import {SucursalEntity} from "./sucursal/sucursal.entity";
import {SucursalModule} from "./sucursal/sucursal.module";

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: 'localhost',
            port: 32769,
            username: 'adrian',
            password: '12345678',
            database: 'nativescript',
            // type: 'postgres',
            // host: 'ec2-23-23-184-76.compute-1.amazonaws.com',
            // port: 5432,
            // username: 'gxokuyxuwpfals',
            // password: '12345678',
            // database: 'dcn0kl3qbqnc28',
            entities: [
                EmpresaEntity,
                SucursalEntity

            ],
            subscribers: [

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

        // rutas a controlar si esta logeado

        const routes = [
            // 'sucursal*',
            // 'empresa*'
        ];
        // Estas opciones deben de ir en el environmnet
        const options = {
            secret: jwksRsa.expressJwtSecret({
                cache: true,
                rateLimit: true,
                jwksRequestsPerMinute: 5,
                jwksUri: 'https://aso-arco-backend.auth0.com/.well-known/jwks.json',
            }),
            issuer: 'https://aso-arco-backend.auth0.com/',
            algorithms: ['RS256'],
        };
        const jwtMiddleware = checkJwt(options);

        routes
            .forEach(
                (ruta) => {
                    consumer
                        .apply(
                            jwtMiddleware,
                        )
                        .forRoutes(ruta);
                },
            );

    }
}
