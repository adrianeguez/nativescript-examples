import {Module} from '@nestjs/common';
import {EmpresaController} from "./empresa.controller";
import {EmpresaService} from "./empresa.service";
import {TypeOrmModule} from '@nestjs/typeorm';
import {EmpresaEntity} from "./empresa.entity";
import {SucursalModule} from "../sucursal/sucursal.module";
import {EmpresaSubscriber} from "./empresa.subscriber";

@Module({
    imports: [
        TypeOrmModule.forFeature([EmpresaEntity])
    ],
    controllers: [EmpresaController],
    providers: [
        EmpresaService,
        EmpresaSubscriber
    ],
    exports: [
        EmpresaService,
        EmpresaSubscriber
    ],
})
export class EmpresaModule {
}
