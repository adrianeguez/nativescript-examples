import {NgModule, NO_ERRORS_SCHEMA} from "@angular/core";
import {NativeScriptModule} from "nativescript-angular/nativescript.module";

import {AppRoutingModule} from "./app-routing.module";
import {AppComponent} from "./app.component";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {HttpClient} from "@angular/common/http";
import {translateHttpLoader} from "./funciones";
import {NativeScriptHttpClientModule} from "nativescript-angular/http-client";
import {NativeScriptCommonModule} from "nativescript-angular/common";
import {LoggerMlModule} from "./logger-service/logger-ml.module";
import {environment} from "~/environments/environment";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        NativeScriptCommonModule,
        AppRoutingModule,
        NativeScriptHttpClientModule,
        TranslateModule.forRoot(
            {
                loader: {
                    provide: TranslateLoader,
                    useFactory: (translateHttpLoader),
                    deps: [HttpClient]
                }
            }
        ),
        LoggerMlModule.forRoot({
            produccion: environment.production
        })
    ],
    declarations: [
        AppComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule {

}
