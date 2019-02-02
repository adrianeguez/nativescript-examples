import { WebSocketGateway } from '@nestjs/websockets';
import { PrincipalGateway } from '@manticore-labs/nest';
import { SucursalService } from './sucursal.service';
import { SucursalCreateDto } from './sucursal-create-dto/sucursal-create-dto';
import { SucursalUpdateDto } from './sucursal-update-dto/sucursal-update-dto';
import { politicasSucursal } from './sucursal-politicas/sucursal.politicas';
import { mensajesSucursal } from './sucursal-mensajes/sucursal.mensajes';

@WebSocketGateway(3001, { namespace: '/sucursal' })
export class SucursalGateway extends PrincipalGateway {
    constructor(private readonly _sucursalService: SucursalService) {
        super(
            'http://localhost:3001',
            '/sucursal',
            'secreto',
            { // funciones gateway
                afterInit: undefined,
                handleConnection: undefined,
                handleDisconnect: undefined
            },
            { // funciones broadcast
                createOne: {
                    broadcast: true,
                    funcionJoin: undefined
                },
                deleteOne: {
                    broadcast: true,
                    funcionJoin: undefined
                },
                updateOne: {
                    broadcast: true,
                    funcionJoin: undefined
                }
            },
            politicasSucursal, // politicas de seguridad
            _sucursalService, // servicio
            {  // Dto
                CreateDto: SucursalCreateDto,
                UpdateDto: SucursalUpdateDto
            },
            0, // take
            30, // skip
            mensajesSucursal,
            undefined);
        this.contexto = this;
    }

}