import {Component, OnInit} from "@angular/core";
import {TranslateService} from "@ngx-translate/core";
import * as Platform from "platform";
import {environment} from "~/environments/environment";
import {LoggerMlService} from "~/app/logger-service/logger-ml.service";

@Component({
    moduleId: module.id,
    selector: "ns-app",
    templateUrl: "app.component.html"
})
export class AppComponent implements OnInit {
    constructor(private readonly translate: TranslateService,
                private readonly _log: LoggerMlService) {
        translate.setDefaultLang('en');
        console.log('Platform ', Platform.device.language);
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
        console.log('URL', environment.apiUrl)
    }
}
