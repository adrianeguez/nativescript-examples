import {PrincipalEntity} from '@manticore-labs/nest';
import {BeforeInsert, Column, Entity, OneToMany} from 'typeorm';
import {SucursalEntity} from "../sucursal/sucursal.entity";

@Entity('empresa')
export class EmpresaEntity extends PrincipalEntity {

    @Column()
    nombre: string;

    @OneToMany(
        type => SucursalEntity,
        sucursal => sucursal.empresa
    )
    sucursales: SucursalEntity[];

}
