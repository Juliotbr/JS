import readline from 'readline-sync'

const lista: Array<string> = new Array<string>();
let cor: string;

for (let i = 0; i < 5; i++) {
    lista.push(readline.question('Digite 5 cores: '))
}

console.log(lista);

for(let cor of lista){
    console.log('A cor é: ' + cor);
}

console.log(lista.sort());

for(let cor of lista){
    console.log('A cor é: ' + cor);
}