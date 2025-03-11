import readline from "node:readline/promises";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let numero = await rl.question("Digite um número: ");

for (let i = 0; i <= numero; i++) {
    const soma = Number(numero) + Number(i);
    console.log(numero + " + " + i + " = " + soma)
}

rl.close();