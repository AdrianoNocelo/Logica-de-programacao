// Contador de números pares

import readline from "node:readline/promises";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = await rl.question("Digite um número para contagem de números pares\n");

console.log("Contando... \n");

// inicializacao, condicao, incremento 
for (let i = 0; i <= input; i++) {
  // % - resto - e.g. 4 % 2 é igual a 0
  const ehPar = i % 2 === 0;

  if (ehPar) {
    console.log(i)
  }
}

rl.close();
