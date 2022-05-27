export class Pasaje {

    dni : string ;
    precio: number ;
    precio_con_descuento: number;
    fecha: string;
    categoria: string | undefined;
    porcentaje: string;

    constructor(){      
        this.dni = "";
        this.precio = 0;
        this.precio_con_descuento = 0;
        this.porcentaje = "";
        this.fecha = "";
    }

    pasaje(dni: string, precio: number, precio_con_descuento: number,
        fecha: string, categoria: string, porcentaje: string){
            this.dni = dni;
            this.precio = precio;
            this.precio_con_descuento = precio_con_descuento;
            this.fecha = fecha;
            this.categoria = categoria;
            this.porcentaje = porcentaje;
    }
}