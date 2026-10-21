import { Component, OnInit, ViewChild,ElementRef } from '@angular/core';

@Component({
    standalone: false,
    selector: 'app-sumar-numeros',
    templateUrl: './sumar.numeros.component.html'
})

export class SumarNumerosComponent implements OnInit {
    @ViewChild("cajanumero1") cajanumero1: ElementRef;
    @ViewChild("cajanumero2") cajanumero2: ElementRef;
    public suma: number;

    constructor() {
        this.suma =0;

        this.cajanumero1= new ElementRef(0);
        this.cajanumero2= new ElementRef(0);



    }

    sumarNumeros():void{
        let num1 = this.cajanumero1.nativeElement.value;
        let num2 = this.cajanumero2.nativeElement.value;
        this.suma = parseInt(num1) + parseInt(num2);
    }


    ngOnInit() { }
}