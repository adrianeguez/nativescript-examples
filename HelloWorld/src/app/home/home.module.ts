import {NgModule, NO_ERRORS_SCHEMA} from "@angular/core";
import {NativeScriptCommonModule} from "nativescript-angular/common";

import {HomeRoutingModule} from "./home-routing.module";
import {HomeComponent} from "./home.component";
import {TranslateModule} from "@ngx-translate/core";
import {StoreModule} from '@ngrx/store';
import {homeReducer} from '~/app/home/state/home.reducer';

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
        HomeComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class HomeModule {
}
