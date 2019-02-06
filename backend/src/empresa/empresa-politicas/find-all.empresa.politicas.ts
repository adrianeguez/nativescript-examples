import {FuncionBooleana} from '@manticore-labs/nest';
import {EmpresaController} from "../empresa.controller";

export const FIND_ALL_POLITICAS: FuncionBooleana[] = [
    async (objeto, empresaController: EmpresaController) => {
        console.log(objeto.web.request.user);
        console.log(await empresaController._sucursalService.find());
        return true
    }
];