// sem IA
import readline from "node:readline/promises";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let a = await rl.question("Digite o primeiro número: ");
let b = await rl.question("Digite o segundo número: ");
let aSoma = Number(a) + Number(b);

console.log("A soma é: " + aSoma);

rl.close();