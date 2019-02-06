import { Module } from '@nestjs/common';
import {EmpresaController} from "./empresa.controller";
import {EmpresaService} from "./empresa.service";
import {TypeOrmModule} from '@nestjs/typeorm';
import {EmpresaEntity} from "./empresa.entity";
import {SucursalModule} from "../sucursal/sucursal.module";

@Module({
    imports:[
        TypeOrmModule.forFeature([EmpresaEntity]),
        SucursalModule
    ],
    controllers: [EmpresaController],
    providers: [EmpresaService],
    exports: [EmpresaService],
})
export class EmpresaModule {}
