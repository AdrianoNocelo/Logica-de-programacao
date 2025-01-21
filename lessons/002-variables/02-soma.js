import readline from "node:readline/promises";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("### CALCULADORA DE SOMA ###\n")

// Pedir dois números para somar
let x = await rl.question("Digite o valor de x:\n");
let y = await rl.question("Digite o valor de y:\n");

// Number - Converte uma string para número
let resultado = Number(x) + Number(y);

console.log("O resultado é: " + resultado);

rl.close();
