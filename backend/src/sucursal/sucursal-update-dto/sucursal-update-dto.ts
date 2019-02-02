import {IsOptional, IsString, IsInt} from 'class-validator';
import {PrincipalDto} from '@manticore-labs/nest';

export class SucursalUpdateDto extends PrincipalDto {
    @IsOptional()
    @IsString()
    nombre?: string;

    @IsOptional()
    @IsInt()
    empresa?: number;
}
