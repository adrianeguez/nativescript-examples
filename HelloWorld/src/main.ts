// this import should be first in order to load some required settings (like globals and reflect-metadata)
import {platformNativeScriptDynamic} from "nativescript-angular/platform";
import {AppModule} from "./app/app.module";
import {ios} from "tns-core-modules/application";
import {EventosDelegate} from "~/app/eventos-applicacion/eventos-delegate/custom-delegate";
import {aplicarAuth0Delegate} from "~/app/eventos-applicacion/eventos-delegate/auth0-delegate";


if (ios) {
    ios.delegate = EventosDelegate;
    aplicarAuth0Delegate(EventosDelegate);
}


platformNativeScriptDynamic().bootstrapModule(AppModule);


