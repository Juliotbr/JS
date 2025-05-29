const readline = require('readline-sync');

let contadorPares = 0;
let contadorImpares = 0;

console.log("Digite 10 numeros inteiros:");

for (let i = 1; i <= 10; i++) {
  const numeroTexto = readline.question(`Digite o ${i} numero: `);
  const numero = parseInt(numeroTexto);

  if (numero % 2 === 0) {
    contadorPares++;
  } else {
    contadorImpares++;
  }
}

console.log("\n--- SAÍDA ---");
console.log(`Total de números pares: ${contadorPares}`);
console.log(`Total de números ímpares: ${contadorImpares}`);