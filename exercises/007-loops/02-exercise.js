import readline from "node:readline/promises";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let numero = await rl.question("Digite um número: ");

for (let i = 1; i <= numero; i++) {
    const soma = Number(i) + Number(numero) ;
    console.log(numero + " + " + i + " = " + soma)
}

rl.close();