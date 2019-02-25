import {NgModule} from "@angular/core";
import {Routes} from "@angular/router";
import {NativeScriptRouterModule} from "nativescript-angular/router";
import {RutaHomeComponent} from "~/app/rutas/ruta-home/ruta-home.component";
import {RutaSearchComponent} from "~/app/rutas/ruta-search/ruta-search.component";
import {RutaBrowseComponent} from "~/app/rutas/ruta-browse/ruta-browse.component";
import {RutaFeaturedComponent} from "~/app/rutas/ruta-featured/ruta-featured.component";
import {RutaUnoComponent} from "~/app/home/rutas/ruta-uno/ruta-uno.component";

const routes: Routes = [
    {path: "", redirectTo: "/(home:home//search:search//browse:browse//featured:featured)", pathMatch: "full"},
    {path: "home", loadChildren:'~/app/home/home.module#HomeModule' , outlet: "home"},
    {path: "search", component: RutaSearchComponent, outlet: "search"},
    {path: "browse", component: RutaBrowseComponent, outlet: "browse"},
    {path: "featured", component: RutaFeaturedComponent, outlet: "featured"},
    // {path: "ruta-uno", component: RutaUnoComponent , outlet: "home"}
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule {
}

