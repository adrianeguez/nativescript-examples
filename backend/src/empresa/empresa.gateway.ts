import { WebSocketGateway } from '@nestjs/websockets';
import { PrincipalGateway } from '@manticore-labs/nest';
import { EmpresaService } from './empresa.service';
import { EmpresaCreateDto } from './empresa-create-dto/empresa-create-dto';
import { EmpresaUpdateDto } from './empresa-update-dto/empresa-update-dto';
import { politicasEmpresa } from './empresa-politicas/empresa.politicas';
import { mensajesEmpresa } from './empresa-mensajes/empresa.mensajes';

@WebSocketGateway(3001, { namespace: '/empresa' })
export class EmpresaGateway extends PrincipalGateway {
    constructor(private readonly _empresaService: EmpresaService) {
        super(
            'http://localhost:3001',
            '/empresa',
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
            politicasEmpresa, // politicas de seguridad
            _empresaService, // servicio
            {  // Dto
                CreateDto: EmpresaCreateDto,
                UpdateDto: EmpresaUpdateDto
            },
            0, // take
            30, // skip
            mensajesEmpresa,
            undefined);
        this.contexto = this;
    }

}