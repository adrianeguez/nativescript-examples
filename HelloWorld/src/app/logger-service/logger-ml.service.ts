import {Inject, Injectable} from "@angular/core";
import {ConfigLoggerService} from "~/app/logger-service/interfaces/config-logger-service";

@Injectable()
export class LoggerMlService {
    private produccion: boolean;

    constructor(
        @Inject('configuracion') private readonly configuracion: ConfigLoggerService
    ) {
        this.produccion = this.configuracion.produccion;
    }

    l(...mensajes: any[]) {
        if (!this.produccion) {
            console.log(...mensajes);
        }
    }

    i(...mensajes: any[]) {
        if (!this.produccion) {
            console.info(...mensajes);
        }
    }

    w(...mensajes: any[]) {
        if (!this.produccion) {
            console.warn(...mensajes);
        }
    }

    e(...mensajes: any[]) {
        console.error(...mensajes);
    }

    d(...mensajes: any[]) {
        if (!this.produccion) {
            console.dir(...mensajes);
        }
    }

}