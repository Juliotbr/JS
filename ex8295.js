let lista = []
const readline = require('readline-sync')
let soma = 0

for (let contador = 0; contador < 10; contador++) {
  lista[contador] = readline.questionInt('Numero para adicionar na lista: ')
  soma = soma + lista[contador]
}
console.log(`a soma da lista é ${soma}`);
console.log('a média dos valores é: ' + (soma/10));

for(let contador = 1; contador < 10; contador+=2) {
  console.log(`O numero ${lista[contador]} está no indice ${contador}`);
}

for(let contador = 0; contador < 10; contador++) {
  if(lista[contador] % 2 === 0){
    console.log(`o numero ${lista[contador]} é par`);
  }
}