class Bebe {
    constructor(nombre, meses) {
        this.nombre = nombre;
        this.meses = meses;
    }

    llorar() {
        console.log(`${this.nombre} está llorando. 😭`);
    }

    dormir() {
        console.log(`${this.nombre} está durmiendo. 😴`);
    }

    comer() {
        console.log(`${this.nombre} está comiendo. 🍼`);
    }
}

// Creamos instancias de la clase Bebe para Antonio, Sonia y Javier
const antonio = new Bebe("Antonio", 3);
const sonia = new Bebe("Sonia", 5);
const javier = new Bebe("Javier", 8);

// Mostramos los comportamientos de los bebés
antonio.llorar();
antonio.dormir();
antonio.comer();

sonia.llorar();
sonia.dormir();
sonia.comer();

javier.llorar();
javier.dormir();
javier.comer();
