import {Component, OnInit} from "@angular/core";
import {TranslateService} from "@ngx-translate/core";
import * as Platform from "platform";
import {environment} from "~/environments/environment";
import {MlLoggerService} from "@manticore-labs/nativescript";
import {EventosAplicacionService} from "~/app/servicios/eventos-aplicacion.service";
import {Auth0} from 'nativescript-auth0';
var SecureStorage = require("nativescript-secure-storage").SecureStorage;

@Component({
    moduleId: module.id,
    selector: "ns-app",
    templateUrl: "app.component.html"
})
export class AppComponent implements OnInit {

    auth0;

    constructor(private readonly translate: TranslateService,
                private readonly _log: MlLoggerService,
                private readonly _eventosAplicacionService: EventosAplicacionService) {
        translate.setDefaultLang('en');
        console.log('Platform ', Platform.device.language);
        console.log('Platform ', Platform.device.os);
        // the lang to use, if the lang isn't available, it will use the current loader to get them
        translate.use('en');

        this._log.l('LOG: Datos');
        this._log.i('INFO: Datos');
        this._log.w('WARN: Datos');
        this._log.e('ERROR: Datos');
        this._log.d({
            valor: 'DIR Datos'
        });


    }

    ngOnInit() {
        // this.auth0 = new Auth0('zkODfb91o5e34eilbELKyL0yOOrRjMxR', 'aso-arco-backend.auth0.com');

        this._eventosAplicacionService.resumeEvent
            .subscribe(
                ()=>{
                    this._log.i("En Resumen");
                    var a = new SecureStorage()
                    a.set({
                        key: "foo",
                        value: "I was set at " + new Date()
                    }).then(
                        function(success) {
                            console.log("Successfully set a value? " + success);

                            a.get({
                                key: "foo"
                            }).then(
                                function(value) {
                                    console.log("Got value: " + value);
                                }
                            );
                        }
                    );
                }
            );

    }

    onSelectedIndexChanged(a) {
        this._log.l('LOG: Cambio', a);
    }
}
