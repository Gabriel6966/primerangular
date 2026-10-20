import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-deportes',
    standalone: false,
    templateUrl: './deportes.componet.html',
    styleUrls: ['./deportes.component.css']
})

export class DeportesComponent implements OnInit {

    public numeros: Array<number>;
    public deportes: Array<string>;

    constructor() { 
        this.numeros=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        this.deportes=['Futbol', 'Basketball', 'Tenis', 'Natacion', 'Ciclismo', 'Atletismo', 'Boxeo', 'Voleibol', 'Rugby', 'Golf'];
    }

    ngOnInit(): void { }
}
