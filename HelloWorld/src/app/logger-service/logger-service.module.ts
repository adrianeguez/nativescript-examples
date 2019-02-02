import {ModuleWithProviders, NgModule} from "@angular/core";

@NgModule({})
export class LoggerServiceModule {
    static forRoot(habilitado): ModuleWithProviders {
        return {
            ngModule: LoggerServiceModule,
            providers: []
        };
    }
}