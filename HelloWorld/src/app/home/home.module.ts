import {NgModule, NO_ERRORS_SCHEMA} from "@angular/core";
import {NativeScriptCommonModule} from "nativescript-angular/common";

import {HomeRoutingModule} from "./home-routing.module";
import {HomeComponent} from "./home.component";
import {TranslateModule} from "@ngx-translate/core";
import {StoreModule} from '@ngrx/store';
import {homeReducer} from '~/app/home/state/home.reducer';
import { RutaUnoComponent } from './rutas/ruta-uno/ruta-uno.component';
import { RutaDosComponent } from './rutas/ruta-dos/ruta-dos.component';
import { RutaModalUnoComponent } from './rutas/ruta-modal-uno/ruta-modal-uno.component';

@NgModule({
    imports: [
        NativeScriptCommonModule,
        HomeRoutingModule,
        TranslateModule.forChild(),
        StoreModule.forFeature(
            'productos', homeReducer
        )
    ],
    declarations: [
        HomeComponent,
        RutaUnoComponent,
        RutaDosComponent,
        RutaModalUnoComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ],
    entryComponents: [
        RutaModalUnoComponent
    ],
})
export class HomeModule {
}
