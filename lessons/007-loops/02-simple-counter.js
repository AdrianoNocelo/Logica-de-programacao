import readline from "node:readline/promises";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = await rl.question("Digite até que número eu devo contar\n");

console.log("Contando... \n");

// Conte uma quantidade de vezes
// inicializacao, condicao, incremento
for (let i = 1; i <= input; i++) {
  console.log(i);
}

// outra solução 
// for (let i = 0; i < input; i++) {
//  console.log(i + 1)
// }


rl.close();
