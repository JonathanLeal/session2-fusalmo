const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

class Persona {
  constructor(nombre, peso, altura) {
    this.nombre = nombre;
    this.peso = peso;
    this.altura = altura;
}

calcularIMC() {
    return this.peso / (this.altura * this.altura);
}

mostrarIMC() {
    const imc = this.calcularIMC();
    console.log(`El IMC de ${this.nombre} es: ${imc.toFixed(2)}`);
}
}

function solicitarDatos() {
  rl.question('Ingrese su nombre: ', (nombre) => {
    rl.question('Ingrese su peso en kg: ', (peso) => {
      rl.question('Ingrese su altura en metros: ', (altura) => {
        const persona = new Persona(nombre, parseFloat(peso), parseFloat(altura));
        persona.mostrarIMC();
        rl.close();
      });
    });
  });
}

solicitarDatos();
