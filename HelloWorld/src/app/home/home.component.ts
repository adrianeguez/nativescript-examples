import {Component, OnInit} from "@angular/core";
import {TranslateService} from "@ngx-translate/core";
import * as Platform from "platform";
@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {

    param = {value: 'world'}

    constructor(private readonly translate: TranslateService) {
        // this language will be used as a fallback when a translation isn't found in the current language
        translate.setDefaultLang('en');
        console.log('Platform ',Platform.device.language);

        // the lang to use, if the lang isn't available, it will use the current loader to get them
        translate.use('en');
    }

    ngOnInit(): void {

        this.translate.get('aplicacion.nombre')
            .subscribe(
                (res: string) => {
                    console.log(res);
                    //=> 'hello world'
                },
                (error) => {
                    console.error(error);
                    //=> 'hello world'
                }
            );
        // Init your component properties here.
    }
}
