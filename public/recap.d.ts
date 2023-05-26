declare const text: string;
declare const num: number;
declare const bool: boolean;
declare const arr: Array<number>[];
declare let name1: string;
declare const age = 19;
declare const suma: (a: number, b: number) => number;
declare class Person {
    private age;
    private name;
    constructor(age: number, name: string);
    getSummary(): string;
}
declare class Alumno {
    private nombre;
    private apellido;
    constructor(nombre: string, apellido: string);
    getNombre(): string;
    setNombre(nuevoNombre: string): void;
}
declare const alumno: Alumno;
