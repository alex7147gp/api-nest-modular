const text = "text";
const num = 1;
const bool = true;
const arr = [];
let name1 = "name1";
const age = 19;
const suma = (a, b) => {
    return a + b;
};
class Person {
    constructor(age, name) {
        this.age = age;
        this.name = name;
    }
    getSummary() {
        return `I'm ${this.name} and I'm ${this.age}`;
    }
}
class Alumno {
    constructor(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
    }
    getNombre() {
        return this.nombre;
    }
    setNombre(nuevoNombre) {
        this.nombre = nuevoNombre;
    }
}
const alumno = new Alumno('Freddy', 'Vega');
//# sourceMappingURL=recap.js.map