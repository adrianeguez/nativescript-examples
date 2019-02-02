import {PrincipalEntity} from '@manticore-labs/nest';
import {Column, Entity, ManyToOne} from 'typeorm';
import {EmpresaEntity} from "../empresa/empresa.entity";

@Entity('sucursal')
export class SucursalEntity extends PrincipalEntity {

    @Column()
    direccion: string;

    @ManyToOne(
        type => EmpresaEntity,
        empresa => empresa.sucursales
    )
    empresa: EmpresaEntity;

}
