import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {  CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Punto1Component } from './punto1/punto1.component';
import { VentaPasajeComponent } from './venta-pasaje/venta-pasaje.component';
import { Punto2Component } from './punto2/punto2.component';




@NgModule({
  declarations: [
    AppComponent,
    VentaPasajeComponent,
    Punto1Component,
    Punto2Component
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
