import readline from 'readline-sync'; 

const numerosSet: Set<number> = new Set<number>();

console.log("Digite 10 valores inteiros nao repetidos:");

for (let i = 0; i < 10; i++) {
    const valor = readline.questionInt(`Digite o ${i + 1}º valor: `);
    numerosSet.add(valor);
}

console.log("Listar dados do Set:");

const numerosArray: number[] = Array.from(numerosSet).sort((a, b) => a - b);

numerosArray.forEach(numero => {
    console.log(numero);
});