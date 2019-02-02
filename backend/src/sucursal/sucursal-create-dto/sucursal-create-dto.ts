import {IsNotEmpty, IsString, IsInt} from 'class-validator';
import {PrincipalDto} from '@manticore-labs/nest';

export class SucursalCreateDto extends PrincipalDto {
    @IsNotEmpty()
    @IsString()
    nombre: string;

    @IsNotEmpty()
    @IsInt()
    empresa: number;
}
