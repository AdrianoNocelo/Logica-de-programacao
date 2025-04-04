import readline from "node:readline/promises";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let palavra = await rl.question("Digite uma palavra: ");
let contadorDeVogal = 0;

for (let i = 0; i < palavra.length; i++) {
  const letraAtual = palavra[i];

  // Verificamos se a letra atual é uma vogal
  if (
    letraAtual === "a" ||
    letraAtual === "e" ||
    letraAtual === "i" ||
    letraAtual === "o" ||
    letraAtual === "u"
  ) {
    // Para cada volta do loop coloca +1 no contador
    contadorDeVogal += 1;
    // ou contadorDeVogal = contadorDeVogal + 1;
    // ou contadorDeVogal++;
  }
}

console.log(
  'A palavra "' + palavra + '" tem ' + contadorDeVogal + ' vogais'
);

rl.close();
