import {Injectable} from "@angular/core";
import {MlLoggerService, EventosAplicacionAbstractService} from "@manticore-labs/nativescript";

@Injectable()
export class EventosAplicacionService extends EventosAplicacionAbstractService {
    constructor(private readonly log: MlLoggerService) {
        super(log);
    }
}
