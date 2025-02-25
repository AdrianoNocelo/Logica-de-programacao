import readline from "node:readline/promises";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let numero= await rl.question("Digite um número: ");

if (Number(numero) >= 0) {
  console.log("O número é positivo");
} else {
  console.log("O número é negativo.");
}

rl.close();
