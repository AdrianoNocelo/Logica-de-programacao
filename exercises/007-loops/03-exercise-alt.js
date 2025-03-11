
import readline from "node:readline/promises";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let palavra = await rl.question("Digite uma palavra: ");
let contadorDeVogal = 0;
const vogais = ["a", "e", "i", "o", "u"];

for (let i = 0; i < palavra.length; i++) {
  const letraAtual = palavra[i];

  // Verificamos se a letra atual é uma vogal
  if (vogais.includes(letraAtual)) {
    // Para cada volta do loop coloca +1 no contador
    contadorDeVogal += 1;
  }
}

console.log(
  'A palavra "' + palavra + '" tem ' + contadorDeVogal + ' vogais'
);

rl.close();
