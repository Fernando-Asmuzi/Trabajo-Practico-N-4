import { Component, OnInit } from '@angular/core';
import { Pasaje } from '../models/pasaje';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-venta-pasaje',
  templateUrl: './venta-pasaje.component.html',
  styleUrls: ['./venta-pasaje.component.scss']
})
export class VentaPasajeComponent implements OnInit {

  pasaje : Pasaje;
  pasajes : Array<Pasaje>;
  cant_menor : number;
  cant_adulto: number;
  cant_jub : number;
  cant_total : number;

  constructor() {
    this.pasaje = new Pasaje();
    this.pasajes = new Array<Pasaje>();
    this.cant_menor = 0;
    this.cant_adulto = 0;
    this.cant_jub = 0;
    this.cant_total = 0;
   }

  ngOnInit(): void {
  }

  registrarPasaje(){
      
      if(this.pasaje.dni == "" || this.pasaje.categoria == "" || this.pasaje.precio == 0){
        alert("Debe completar todos los campos")
      }else{
        this.pasaje.fecha = new Date().toLocaleDateString();
        this.pasajes.push(this.pasaje);
        if(this.pasaje.categoria == "M"){
            this.cant_menor++;
        }else if(this.pasaje.categoria == "J"){
             this.cant_jub++;
        }else if(this.pasaje.categoria == "A"){
            this.cant_adulto++;
        }
        this.cant_total = this.cant_menor + this.cant_adulto + this.cant_jub;
        this.pasaje = new Pasaje();
      }
  }

  public cambio(){
     
     if(this.pasaje.categoria == "M"){
       this.pasaje.precio_con_descuento = 0;
       this.pasaje.precio_con_descuento = this.pasaje.precio * 0.75;
       this.pasaje.porcentaje = "25 %";
       
     }else if(this.pasaje.categoria == "J"){
        this.pasaje.precio_con_descuento = 0;
        this.pasaje.precio_con_descuento = this.pasaje.precio * 0.50;
        this.pasaje.porcentaje = "50 %";
       
     }else if(this.pasaje.categoria == "A"){
        this.pasaje.precio_con_descuento = 0;
        this.pasaje.precio_con_descuento = this.pasaje.precio;
        this.pasaje.porcentaje = "Sin descuento";
     }
  }

  limpiarTodo(){
    this.pasaje = new Pasaje();
  }


}
