import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-deportes',
    standalone: false,
    templateUrl: './deportes.componet.html'
})

export class DeportesComponent implements OnInit {
    public sports: string[] = ['Fútbol', 'Baloncesto', 'Tenis'];

    constructor() { }

    ngOnInit(): void { }
}
