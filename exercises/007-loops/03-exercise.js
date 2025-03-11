import readline from "node:readline/promises";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let palavra = await rl.question("Digite uma palavra: ");
let contadorDeCaracteres = 0;
for (let i = 1; i < palavra.length; i++) {
    const letraAtual = palavra[i] ;
}
    console.log("A palavra " + "" + palavra + "" + " tem " + contadorDeCaracteres + " vogais.")

rl.close();