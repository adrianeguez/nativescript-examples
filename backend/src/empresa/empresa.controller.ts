import { Controller } from '@nestjs/common';
import { EmpresaService } from './empresa.service';
import { EmpresaUpdateDto } from './empresa-update-dto/empresa-update-dto';
import { EmpresaCreateDto } from './empresa-create-dto/empresa-create-dto';
import { politicasEmpresa } from './empresa-politicas/empresa.politicas';
import { mensajesEmpresa } from './empresa-mensajes/empresa.mensajes';
import { PrincipalController } from '@manticore-labs/nest';
import {SucursalService} from "../sucursal/sucursal.service";

@Controller('empresa')
export class EmpresaController extends PrincipalController<
    EmpresaCreateDto,
    EmpresaUpdateDto> {
    constructor(private readonly _empresaService: EmpresaService,
                public readonly _sucursalService: SucursalService) {
        super( politicasEmpresa, // politicas de seguridad
        _empresaService, // servicio
            { // Dto
                CreateDto: EmpresaCreateDto,
                UpdateDto: EmpresaUpdateDto
            },
            0, // skip
            30, // take
            mensajesEmpresa,
            undefined // contexto
            );
        this.contexto = this;
    }
}
