import { Component,OnInit,ElementRef,ViewChild } from '@angular/core';

@Component({
  selector: 'app-tabla-component',
  standalone: false,
  styleUrl: './tabla-component.css',
  templateUrl: './tabla-component.html',
})






export class TablaComponent implements OnInit {

  @ViewChild("cajanumero1") cajanumero1!: ElementRef;

  public resultado: Array<number>;
  public numero2: number;
  public resultado2: Array<number>;

  constructor() {
    this.resultado = [];
    this.numero2 = 3;
    this.resultado2 = [];

  }

  multiplicarNumeros():void{
    
    const num1 = this.cajanumero1.nativeElement.value;
    for(let i=0; i<=10; i++){
      this.resultado.push(i*num1);
      console.log(i*num1)
    }
  }

  multiplicarNumero():void{
    const resultado2=[]
    for(let i=0; i<=10;i++){
      this.resultado2.push(i*this.numero2);
      console.log(i*this.numero2)
      
    }
  }


  ngOnInit(): void {
  }
}
