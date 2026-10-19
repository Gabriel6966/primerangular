import { Component, OnInit } from '@angular/core';

@Component({
    selector: "hooks-component",
    standalone: false,
    templateUrl: "./hooks.component.html",
})

export class HooksComponent implements OnInit {
    public mensaje: string;
    constructor() {
        console.log("Contructor:Primer metodo del Component");
        this.mensaje = "Hoy es lunes...";
    }
    ngOnInit(): void {
        console.log("ngOnInit: Segundo metodo del Component");
    }

    ngDoCheck(): void {
        console.log("DoCheck: Me ejecuto cada vez que cambia el render");
    }
    cambiarMensaje(): void {
        this.mensaje = "Mañana es martes"
    }
}