import {NgModule, NO_ERRORS_SCHEMA} from "@angular/core";
import {NativeScriptModule} from "nativescript-angular/nativescript.module";

import {AppRoutingModule} from "./app-routing.module";
import {AppComponent} from "./app.component";
import {TranslateLoader, TranslateModule, TranslateService} from "@ngx-translate/core";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {translateHttpLoader} from "./funciones";
import {NativeScriptHttpClientModule} from "nativescript-angular/http-client";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {NativeScriptCommonModule} from "nativescript-angular/common";

export const createTranslateLoader = (http: HttpClient) => {
    return new TranslateHttpLoader(http, '/i18n/', '.json');
};

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        NativeScriptCommonModule,
        // AppRoutingModule,
        NativeScriptHttpClientModule,
        TranslateModule.forRoot(
            {
                loader: {
                    provide: TranslateLoader,
                    useFactory: (createTranslateLoader),
                    deps: [HttpClient]
                }
            }
        )
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
