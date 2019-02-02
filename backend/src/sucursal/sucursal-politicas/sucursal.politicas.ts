import { FuncionesSeguridad } from '@manticore-labs/nest';
import { FIND_ALL_POLITICAS } from './find-all.sucursal.politicas';
import { FIND_WHERE_OR_POLITICAS } from './find-where-or.sucursal.politicas';
import { COUNT_POLITICAS } from './count.sucursal.politicas';
import { FIND_ONE_POLITICAS } from './find-one.sucursal.politicas';
import { CREATE_ONE_POLITICAS } from './create-one.sucursal.politicas';
import { UPDATE_ONE_POLITICAS } from './update-one.sucursal.politicas';
import { DELETE_ONE_POLITICAS } from './delete-one.sucursal.politicas';

export const politicasSucursal: FuncionesSeguridad = {
    findAll: FIND_ALL_POLITICAS,
    findOne: FIND_ONE_POLITICAS,
    createOne: CREATE_ONE_POLITICAS,
    updateOne: UPDATE_ONE_POLITICAS,
    deleteOne: DELETE_ONE_POLITICAS,
    count: COUNT_POLITICAS,
    findWhereOr: FIND_WHERE_OR_POLITICAS,
};