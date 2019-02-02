import {IsNotEmpty, IsString} from 'class-validator';
import {PrincipalDto} from '@manticore-labs/nest';

export class EmpresaCreateDto extends PrincipalDto {
    @IsNotEmpty()
    @IsString()
    nombre: string;
}
