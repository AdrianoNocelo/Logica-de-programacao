import readline from "node:readline/promises";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = await rl.question("Digite um número para contagem regressiva\n");

console.log("Contando... \n");

// inicializacao, condicao, decremento 
for (let i = input; i >= 0; i--) {
  console.log(i);
}

rl.close();
