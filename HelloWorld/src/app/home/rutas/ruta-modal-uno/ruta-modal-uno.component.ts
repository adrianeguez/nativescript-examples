import {Component, OnInit} from '@angular/core';
import {ModalDialogParams} from "nativescript-angular";

@Component({
    selector: 'ns-ruta-modal-uno',
    templateUrl: './ruta-modal-uno.component.html',
    styleUrls: ['./ruta-modal-uno.component.css'],
    moduleId: module.id,
})
export class RutaModalUnoComponent implements OnInit {
    texto

    constructor(private mParams: ModalDialogParams) {
    }

    ngOnInit() {
        console.log(this.mParams.context)
        this.texto = this.mParams.context.data
    }

    cerrarModal() {
        this.mParams.closeCallback({mensaje: 'Desde aqui'})
    }

}
