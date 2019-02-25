import { Component, OnInit } from '@angular/core';
import {RouterExtensions} from "nativescript-angular";

@Component({
  selector: 'ns-ruta-dos',
  templateUrl: './ruta-dos.component.html',
  styleUrls: ['./ruta-dos.component.css'],
  moduleId: module.id,
})
export class RutaDosComponent implements OnInit {

  constructor(private routerExtensions: RouterExtensions) { }

  ngOnInit() {



  }

  irRutaUno(){
    this.routerExtensions.navigate(
        [
          '/',
          {
            outlets: {
              'home': ['home', 'ruta-uno'],
            }
          }
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
