import readline from "node:readline/promises";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("### CALCULADORA DE NOTAS ###\n")

let studentName = await rl.question("Informe o nome do estudante:\n");

// Pedir dois números para somar
let av1 = await rl.question("Digite o valor da avaliação 1:\n");
let av2 = await rl.question("Digite o valor de avaliação 2:\n");

// Number - Converte uma string para número
let media = (Number(av1) + Number(av2)) / 2;

console.log("A média do " + studentName + " é " + media);

rl.close();
