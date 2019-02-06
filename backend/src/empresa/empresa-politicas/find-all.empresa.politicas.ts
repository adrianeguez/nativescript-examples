import {FuncionBooleana} from '@manticore-labs/nest';
import {EmpresaController} from "../empresa.controller";

export const FIND_ALL_POLITICAS: FuncionBooleana[] = [
     async (objeto, empresaController: EmpresaController) => {
        // Usuario de Auth0
        console.log(objeto.web.request.user);
         // Llamar a los roles del usuario
         // si se quiere acceder a los servicios del controlador, estos deben de ser publicos
        console.log(await empresaController._sucursalService.find());
        return false
    }
];