import { Component, OnInit } from '@angular/core';

@Component({
    standalone: false,
    selector: 'app-forms-binding',
    templateUrl: './forms.binding.component.html'
})

export class FormsBindingComponent implements OnInit {
    public usuario : any;
    public mensaje: string;

    recibirDatos():void{
        this.mensaje = "Hola " + this.usuario.nombre + " " + this.usuario.apellido;

    }

    constructor() {
        this.mensaje = "Hola";
        this.usuario={
            nombre:"",
            apellido:"",
            edad:0
        }
    }

    ngOnInit() { }
}