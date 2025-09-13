
class Persona{
    nombre:string;
    edad:number;
    constructor(nombre:string, edad:number){
        this.nombre=nombre;
        this.edad=edad;
    }
    imprimi(){
        console.log(`Hola me llamo ${this.nombre} y tengo ${this.edad} años`)
    }
}

let persona:Persona
persona=new Persona("Iridia", 20);
persona.imprimi();