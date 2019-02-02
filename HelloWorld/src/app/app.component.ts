import {Component, OnInit} from "@angular/core";
import {TranslateService} from "@ngx-translate/core";
import * as Platform from "platform";
import {environment} from "~/environments/environment";

@Component({
    moduleId: module.id,
    selector: "ns-app",
    templateUrl: "app.component.html"
})
export class AppComponent implements OnInit {
    constructor(private readonly translate: TranslateService) {
        translate.setDefaultLang('en');
        console.log('Platform ', Platform.device.language);
        // the lang to use, if the lang isn't available, it will use the current loader to get them
        translate.use('en');

        console.log('LOG: Datos');
        console.info('INFO: Datos');
        console.warn('WARN: Datos');
        console.error('ERROR: Datos');
        console.dir({
            valor: 'DIR Datos'
        });


    }

    ngOnInit() {
        console.log('URL', environment.apiUrl)
    }
}
