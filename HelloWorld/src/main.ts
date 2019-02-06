// this import should be first in order to load some required settings (like globals and reflect-metadata)
import {platformNativeScriptDynamic} from "nativescript-angular/platform";
import {AppModule} from "./app/app.module";
import {environment} from "~/environments/environment";
import {ios} from "tns-core-modules/application";
import {CustomDelegate} from "~/app/eventos-applicacion/eventos-delegate/custom-delegate";

// escucharEventosIos(environment.production);
if (ios) {
    const Delegate = CustomDelegate(environment.production);

    class MiDelegado extends Delegate {

    }

    ios.delegate = MiDelegado;
    aplicarAuth0Delegate(MiDelegado);
}


platformNativeScriptDynamic().bootstrapModule(AppModule);


