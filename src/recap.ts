// Tipado de datos con TypeScript
const text: string = "text";
const num: number = 1;
const bool: boolean = true;
const arr: Array<number>[] = [];

let name1: string = "name1";
const age = 19;
const suma = (a: number, b:number) => {
   return a + b;
}



class Person {
   constructor(private age: number, private name: string) {}

   getSummary() {
      return `I'm ${this.name} and I'm ${this.age}`;
   }
}

// Programación Orientada a Objetos con TypeScript
class Alumno {
  private nombre: string;
  private apellido: string;
  
  constructor(nombre: string, apellido: string) {
    this.nombre = nombre;
    this.apellido = apellido;
  }
  
  getNombre() {
    return this.nombre;
  }
  setNombre(nuevoNombre: string) {
    this.nombre = nuevoNombre;
  }
}
const alumno = new Alumno('Freddy', 'Vega');