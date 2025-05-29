const readline = require('readline-sync');

let totalPessoasMenores21 = 0;
let totalPessoasMaiores50 = 0;
let idade = 0;

console.log("Digite as idades (digite uma idade negativa para parar):");

while (true) {
  idade = readline.questionInt("Digite uma idade: ");

  if (idade < 0) {
    break;
  }

  if (idade < 21) {
    totalPessoasMenores21++;
  }

  if (idade > 50) {
    totalPessoasMaiores50++;
  }
}

console.log("\n--- SAÍDA ---");
console.log(`Total de pessoas menores de 21 anos: ${totalPessoasMenores21}`);
console.log(`Total de pessoas maiores de 50 anos: ${totalPessoasMaiores50}`);