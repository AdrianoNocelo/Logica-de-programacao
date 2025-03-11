import readline from "node:readline/promises";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let numero = await rl.question("Digite um número: ");

for (let i = 1; i <= 10   ; i++) {
    const tabuada = numero * i;
    console.log(i + " x " + numero + " = " + tabuada)

}

rl.close();