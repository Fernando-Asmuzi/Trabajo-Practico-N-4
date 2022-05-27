export class Noticia {
    titulo : string;
    cuerpo : string;
    imagen : string;

    noticia(titulo: string, cuerpo: string, imagen: string){
        this.titulo = titulo;
        this.cuerpo = cuerpo;
        this. imagen = imagen;
    }

    constructor(){
        this.titulo = "";
        this.cuerpo = "";
        this.imagen = "";
    }
}

