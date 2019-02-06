// this import should be first in order to load some required settings (like globals and reflect-metadata)
import { platformNativeScriptDynamic } from "nativescript-angular/platform";
import { AppModule } from "./app/app.module";
import {escucharEventosIos} from "~/app/eventos-applicacion/eventos-delegate/eventos-delegate";
import {environment} from "~/environments/environment";

escucharEventosIos(environment.production);

platformNativeScriptDynamic().bootstrapModule(AppModule);


