import {Injectable} from "@angular/core";
import {PlatformEventsAbstractService} from "~/app/platform-events/platform-events-abstract.service";
import {ConfigPlatformEventsService} from "~/app/platform-events/config-platform-events-service";
import {MlLoggerService} from "@manticore-labs/nativescript";
import * as applicationModule from "tns-core-modules/application";

@Injectable()
export class PlatformEventsService extends PlatformEventsAbstractService {
    constructor(private readonly _log: MlLoggerService) {
        super(_log, applicationModule);
        const configuracion: ConfigPlatformEventsService = {
            launchEvent: true
        };
        this.escucharEventos(configuracion);
    }
}