const readline = require('readline-sync');

let somaPositivos = 0;
let numero;

console.log("Digite numeros inteiros (digite 0 para parar):");

do {
  numero = readline.questionInt("Digite um numero: ");

  if (numero > 0) {
    somaPositivos = somaPositivos + numero;
  }
} while (numero !== 0);

console.log(`A soma dos numeros positivos: ${somaPositivos}`);