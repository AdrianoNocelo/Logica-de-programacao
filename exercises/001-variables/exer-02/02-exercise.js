// sem IA
import readline from "node:readline/promises";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let largura = await rl.question("Digite a largura: ");
let comprimento = await rl.question("Digite o comprimento: ");

let area = Number(largura) * Number(comprimento);

console.log("A área do retângulo é: " + area);

rl.close();