import { Injectable } from '@nestjs/common';
import { SucursalUpdateDto } from './sucursal-update-dto/sucursal-update-dto';
import { SucursalCreateDto } from './sucursal-create-dto/sucursal-create-dto';
import { SucursalEntity } from './sucursal.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PrincipalService } from '@manticore-labs/nest';

@Injectable()
export class SucursalService extends PrincipalService<
    SucursalEntity,
    SucursalCreateDto,
    SucursalUpdateDto> {
    constructor(@InjectRepository(SucursalEntity)
    private readonly _sucursalRepository: Repository<SucursalEntity>) {
        super(_sucursalRepository, SucursalEntity, 'default');
    }
}
