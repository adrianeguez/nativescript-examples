import {Component, OnInit} from '@angular/core';
import {RouterExtensions} from "nativescript-angular";
import {platformNames} from "tns-core-modules/platform";
import ios = platformNames.ios;

@Component({
    selector: 'ns-ruta-uno',
    templateUrl: './ruta-uno.component.html',
    styleUrls: ['./ruta-uno.component.css'],
    moduleId: module.id,
})
export class RutaUnoComponent implements OnInit {

    constructor(private routerExtensions: RouterExtensions) {
    }

    ngOnInit() {
    }

    irRutaHome() {

        /*
        *
        * * - curl (same as curlUp) (iOS only)
         * - curlUp (iOS only)
         * - curlDown (iOS only)
         * - explode (Android Lollipop(21) and up only)
         * - fade
         * - flip (same as flipRight)
         * - flipRight
         * - flipLeft
         * - slide (same as slideLeft)
         * - slideLeft
         * - slideRight
         * - slideTop
         * - slideBottom
        * */
        console.log(this.routerExtensions.router.url);

        this.routerExtensions.navigate(
            [
                ''
            ],
            {
                clearHistory: true,
                transition: {
                    name: 'slideRight'
                }
            }
        )
    }
}
