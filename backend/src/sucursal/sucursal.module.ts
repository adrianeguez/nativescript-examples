import { Module } from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {SucursalEntity} from "./sucursal.entity";
import {SucursalController} from "./sucursal.controller";
import {SucursalService} from "./sucursal.service";

@Module({
    imports:[
        TypeOrmModule.forFeature([SucursalEntity])
    ],
    controllers: [SucursalController],
    providers: [SucursalService],
    exports: [SucursalService],
})
export class SucursalModule {}
