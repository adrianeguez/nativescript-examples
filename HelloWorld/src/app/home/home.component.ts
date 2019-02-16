import {Component, OnDestroy, OnInit} from "@angular/core";
import {TranslateService} from "@ngx-translate/core";
import * as Platform from "platform";
import {MlLoggerService} from "@manticore-labs/nativescript";
import {Auth0} from 'nativescript-auth0';
import {select, Store} from '@ngrx/store';
import {CAMBIAR_MOSTRAR_LABEL} from '~/app/home/state/actions/cambiar-mostrar-label';
import {Subscription} from 'rxjs/index';
import {State} from '~/app/interface/state';
import {HomeState} from '~/app/home/state/home.state';

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit, OnDestroy {
    ngOnDestroy(): void {
        this.cambiosEnProductos$.unsubscribe();
    }

    param = {value: 'world'}
    auth0;

    activo: boolean;

    // obsevables

    cambiosEnProductos$: Subscription;

    constructor(private readonly translate: TranslateService,
                private readonly _log: MlLoggerService,
                private readonly _store: Store<State>) {
        // this language will be used as a fallback when a translation isn't found in the current language
        translate.setDefaultLang('en');
        console.log('Platform ', Platform.device.language);

        // the lang to use, if the lang isn't available, it will use the current loader to get them
        translate.use('en');

        this.auth0 = new Auth0('zkODfb91o5e34eilbELKyL0yOOrRjMxR', 'aso-arco-backend.auth0.com');
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
        this.escucharCambiosCambiarMostrarLabel()
        // Init your component properties here.
    }

    login() {
        this.auth0.webAuthentication({
            scope: 'openid offline_access'
        }).then((res) => {
            console.log('No bota ni la verga');
            this._log.l(JSON.stringify(res));
            // goToHomeOrWhatevs();
        }, (error) => {
            console.error('Error');
            console.error(error);

            // console.log(error);
        });
    }

    mostrarLabel() {
        this._store.dispatch({
            type: CAMBIAR_MOSTRAR_LABEL,
            payload: !this.activo
        })
    }

    escucharCambiosCambiarMostrarLabel() {
        const cambiosEnProductos$ = this._store.pipe(
            select('productos')
        );

        this.cambiosEnProductos$ = cambiosEnProductos$
            .subscribe(
                (productos: HomeState) => {
                    console.log('Productos', productos)
                    if (productos) {
                        this.activo = productos.labelVisible
                    }
                }
            )


    }
}
