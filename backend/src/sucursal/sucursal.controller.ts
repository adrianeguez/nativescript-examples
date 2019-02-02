import { Controller } from '@nestjs/common';
import { SucursalService } from './sucursal.service';
import { SucursalUpdateDto } from './sucursal-update-dto/sucursal-update-dto';
import { SucursalCreateDto } from './sucursal-create-dto/sucursal-create-dto';
import { politicasSucursal } from './sucursal-politicas/sucursal.politicas';
import { mensajesSucursal } from './sucursal-mensajes/sucursal.mensajes';
import { PrincipalController } from '@manticore-labs/nest';

@Controller('sucursal')
export class SucursalController extends PrincipalController<
    SucursalCreateDto,
    SucursalUpdateDto> {
    constructor(private readonly _sucursalService: SucursalService) {
        super( politicasSucursal, // politicas de seguridad
        _sucursalService, // servicio
            { // Dto
                CreateDto: SucursalCreateDto,
                UpdateDto: SucursalUpdateDto
            },
            0, // skip
            30, // take
            mensajesSucursal,
            undefined // contexto
            );
        this.contexto = this;
    }
}
