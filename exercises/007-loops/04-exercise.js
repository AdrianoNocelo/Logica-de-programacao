import readline from "node:readline/promises";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let numero = await rl.question("Digite um número: ");

for (let i = 1; i <= numero; i++) {
  const numerosimpar = i % 2 !== 0;

  if (numerosimpar) {
    console.log("Os números ímpares entre 1 e " + numero + " são: " + i);
  }
}

rl.close();
