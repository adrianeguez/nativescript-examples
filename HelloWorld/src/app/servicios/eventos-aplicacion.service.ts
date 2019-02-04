import {Injectable} from "@angular/core";
import {EventosAplicacionAbstractService} from "~/app/eventos-applicacion/eventos-aplicacion-abstract.service";
import {MlLoggerService} from "@manticore-labs/nativescript";

@Injectable()
export class EventosAplicacionService extends EventosAplicacionAbstractService {
    constructor(private readonly log: MlLoggerService) {
        super(log);

    }
}