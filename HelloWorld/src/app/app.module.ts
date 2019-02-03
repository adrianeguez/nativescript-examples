import {NgModule, NO_ERRORS_SCHEMA} from "@angular/core";
import {NativeScriptModule} from "nativescript-angular/nativescript.module";

import {AppRoutingModule} from "./app-routing.module";
import {AppComponent} from "./app.component";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {HttpClient} from "@angular/common/http";
import {translateHttpLoader} from "./funciones";
import {NativeScriptHttpClientModule} from "nativescript-angular/http-client";
import {NativeScriptCommonModule} from "nativescript-angular/common";
import {MlLoggerModule} from "@manticore-labs/nativescript";
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
        MlLoggerModule.forRoot({
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
