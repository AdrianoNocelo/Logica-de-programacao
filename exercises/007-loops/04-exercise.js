import readline from "node:readline/promises";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let numero = await rl.question("Digite um número: ");
let contadorDeCaracteres = 0;

for (let i = 1; i <= numero; i++) {
    const numerosimpar = i % 2 !== 0;

  if(numerosimpar) {
    contadorDeCaracteres += 1;
    console.log("Os números ímpares entre 1 e " + numero + " são: " + numerosimpar)
  }

}
rl.close();