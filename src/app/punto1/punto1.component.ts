import { Component, OnInit } from '@angular/core';
import { Noticia } from '../models/noticia';


@Component({
  selector: 'app-punto1',
  templateUrl: './punto1.component.html',
  styleUrls: ['./punto1.component.scss']
})
export class Punto1Component implements OnInit {
  noticia : Noticia;
  noticias : Array<Noticia>;

  constructor(){
      this.noticia = new Noticia();
      this.noticias = new Array<Noticia>();
  }

  ngOnInit(): void {
    this.noticia.titulo = "ARUBA";
    this.noticia.cuerpo = "Aruba, una pequeña isla del Caribe holandés frente a las costas de Venezuela, tiene un clima seco y soleado, playas claras y un oleaje suave. Los constantes vientos alisios traen brisas frescas y hacen que los árboles dividivi se inclinen hacia el suroeste. La influencia europea se nota en la arquitectura con techos neerlandeses de dos aguas pintados en tonos pasteles tropicales. ";
    this.noticia.imagen = "../../assets/image/slide_1.jpg";
    this.noticias.push(this.noticia);
    this.noticia = new Noticia();

    this.noticia.titulo = "TAILANDIA";
    this.noticia.cuerpo = "Tailandia es un país del Sudeste Asiático. Es famoso por sus playas tropicales, los opulentos palacios reales, las ruinas antiguas y los templos adornados con figuras de Buda. En Bangkok, la capital, un paisaje urbano ultramoderno se alza junto a las tranquilas comunidades a orillas de los canales y a los icónicos templos de Wat Arun, Wat Pho y el Templo del Buda de Esmeralda (Wat Phra Kaew).";
    this.noticia.imagen = "../../assets/image/slide_2.jpg";
    this.noticias.push(this.noticia);
    this.noticia = new Noticia();

    this.noticia.titulo = "MADAGASCAR";
    this.noticia.cuerpo = "Madagascar es una enorme nación insular frente a la costa sureste de África. Alberga miles de especies animales, como lémures, que solo se encuentran en este lugar, junto con bosques tropicales, playas y arrecifes. Cerca de la ajetreada capital, Antananarivo, se ubica Ambohimanga, un complejo de palacios reales y cementerios en la ladera, junto con la “avenida de los Baobabs”, un camino de tierra bordeado de enormes árboles con siglos de antigüedad.";
    this.noticia.imagen = "../../assets/image/slide_3.jpg";
    this.noticias.push(this.noticia);
    this.noticia = new Noticia();
    
  }


}
