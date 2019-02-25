import {NgModule, NO_ERRORS_SCHEMA} from "@angular/core";
import {NativeScriptModule} from "nativescript-angular/nativescript.module";
import {AppRoutingModule} from "./app-routing.module";
import {AppComponent} from "./app.component";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {HttpClient} from "@angular/common/http";
import {NativeScriptHttpClientModule} from "nativescript-angular/http-client";
import {NativeScriptCommonModule} from "nativescript-angular/common";
import {MlLoggerModule, translateHttpLoader} from "@manticore-labs/nativescript";
import {environment} from "~/environments/environment";
import {EventosAplicacionService} from "~/app/servicios/eventos-aplicacion.service";
import {StoreModule} from '@ngrx/store';
import { RutaHomeComponent } from './rutas/ruta-home/ruta-home.component';
import { RutaSearchComponent } from './rutas/ruta-search/ruta-search.component';
import { RutaBrowseComponent } from './rutas/ruta-browse/ruta-browse.component';
import { RutaFeaturedComponent } from './rutas/ruta-featured/ruta-featured.component';
import {RutaUnoComponent} from "~/app/home/rutas/ruta-uno/ruta-uno.component";

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
        }),
        StoreModule.forRoot(
            {

            }
        )
    ],
    providers:[
        EventosAplicacionService,
    ],
    declarations: [
        AppComponent,
        RutaHomeComponent,
        RutaSearchComponent,
        RutaBrowseComponent,
        RutaFeaturedComponent,
        // RutaUnoComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule {

}
