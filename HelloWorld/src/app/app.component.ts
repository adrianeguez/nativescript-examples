import { Component } from "@angular/core";
import {TranslateService} from "@ngx-translate/core";
import * as Platform from "platform";

@Component({
    moduleId: module.id,
    selector: "ns-app",
    templateUrl: "app.component.html"
})
export class AppComponent {
    constructor(private readonly translate: TranslateService){
        translate.setDefaultLang('en');
        console.log('Platform ', Platform.device.language);

        // the lang to use, if the lang isn't available, it will use the current loader to get them
        translate.use('en');
    }
}
