import {NgModule} from "@angular/core";
import {Routes} from "@angular/router";
import {NativeScriptRouterModule} from "nativescript-angular/router";

import {HomeComponent} from "./home.component";
import {RutaUnoComponent} from "~/app/home/rutas/ruta-uno/ruta-uno.component";
import {RutaDosComponent} from "~/app/home/rutas/ruta-dos/ruta-dos.component";

const routes: Routes = [
    {path: "", component: HomeComponent},
    {path: "home", component: HomeComponent},
    {path: "ruta-uno", component: RutaUnoComponent},
    {path: "ruta-dos", component: RutaDosComponent}
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class HomeRoutingModule {
}
