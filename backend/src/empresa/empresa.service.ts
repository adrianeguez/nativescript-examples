import { Injectable } from '@nestjs/common';
import { EmpresaUpdateDto } from './empresa-update-dto/empresa-update-dto';
import { EmpresaCreateDto } from './empresa-create-dto/empresa-create-dto';
import { EmpresaEntity } from './empresa.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PrincipalService } from '@manticore-labs/nest';

@Injectable()
export class EmpresaService extends PrincipalService<
    EmpresaEntity,
    EmpresaCreateDto,
    EmpresaUpdateDto> {
    constructor(@InjectRepository(EmpresaEntity)
    private readonly _empresaRepository: Repository<EmpresaEntity>) {
        super(_empresaRepository, EmpresaEntity, 'default');
    }
}
