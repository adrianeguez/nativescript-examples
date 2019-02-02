import {IsOptional, IsString} from 'class-validator';
import {PrincipalDto} from '@manticore-labs/nest';

export class EmpresaUpdateDto extends PrincipalDto {

    @IsOptional()
    @IsString()
    nombre?: string;
}
