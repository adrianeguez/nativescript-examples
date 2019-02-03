import {ModuleWithProviders, NgModule} from "@angular/core";
import {ConfigLoggerService} from "~/app/logger-service/interfaces/config-logger-service";
import {LoggerMlService} from "~/app/logger-service/logger-ml.service";

@NgModule({

})
export class LoggerMlModule {
    static forRoot(configuracion: ConfigLoggerService): ModuleWithProviders {
        return {
            ngModule: LoggerMlModule,
            providers: [LoggerMlService, {provide: 'configuracion', useValue: configuracion}],
        };
    }
}
