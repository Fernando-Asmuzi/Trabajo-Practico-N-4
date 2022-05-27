import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-punto2',
  templateUrl: './punto2.component.html',
  styleUrls: ['./punto2.component.scss']
})
export class Punto2Component implements OnInit {
  palabras : Array<String>;
  intentos : number;
  seleccion : String;
  

  constructor() { 
     this.palabras = new Array<String>();
     this.intentos = 0; 
     this.seleccion = "";
  }

  

  ngOnInit(): void {
    this.palabras = ["florianopolis", "cincinnati", "arequipa", "augsburgo", "sunderland", 
    "shangai", "yokohama", "breslavia", "zacatecas", "kanchanaburi"];
  }

  iniciarJuego(){
       this.seleccion = this.palabras[Math.floor(Math.random() * this.palabras.length)]
      
       let palabra_selec = Array.from(this.seleccion);
       
  }
}
