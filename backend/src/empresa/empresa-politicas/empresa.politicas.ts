import { FuncionesSeguridad } from '@manticore-labs/nest';
import { FIND_ALL_POLITICAS } from './find-all.empresa.politicas';
import { FIND_WHERE_OR_POLITICAS } from './find-where-or.empresa.politicas';
import { COUNT_POLITICAS } from './count.empresa.politicas';
import { FIND_ONE_POLITICAS } from './find-one.empresa.politicas';
import { CREATE_ONE_POLITICAS } from './create-one.empresa.politicas';
import { UPDATE_ONE_POLITICAS } from './update-one.empresa.politicas';
import { DELETE_ONE_POLITICAS } from './delete-one.empresa.politicas';

export const politicasEmpresa: FuncionesSeguridad = {
    findAll: FIND_ALL_POLITICAS,
    findOne: FIND_ONE_POLITICAS,
    createOne: CREATE_ONE_POLITICAS,
    updateOne: UPDATE_ONE_POLITICAS,
    deleteOne: DELETE_ONE_POLITICAS,
    count: COUNT_POLITICAS,
    findWhereOr: FIND_WHERE_OR_POLITICAS,
};