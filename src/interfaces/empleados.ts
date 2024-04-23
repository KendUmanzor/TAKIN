export interface Empleadosbusquedad {


    nombre:   string;
    apellido: string;
    edad:     number;
    oficio1:  string;
    oficio2:  string;
    email:   string;
    genero:   string;



}

export interface EmpleadosRegistro {
    id:   number;
    nombre:   string;
    apellido: string;
    email:   string;
    password: string;


}

export class empleadoClase {


        nombre!:   string;
        apellido!: string;
        edad!:     number;
        email!:   string;
        genero!:   string;
        password:string;
    constructor(nombre:string,apellido:string,edad:number,cor:string,ge:string,contar:string) {
        this.apellido=apellido;
        this.nombre=nombre;
        this.edad=edad;
        this.email = cor;
        this.password=contar
        this.genero=ge;

    }
}
