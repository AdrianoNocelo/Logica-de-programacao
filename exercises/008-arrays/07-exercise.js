import readline from "node:readline/promises";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const palavras = [];

for (let i = 0; i < 5; i++) {
  let resposta = await rl.question("Palavra " + (i + 1) + ": ");
  palavras.push(resposta);
}

let maiorPalavra = palavras[0];

for (let i = 1; i < palavras.length; i++) {
  if (palavras[i].length > maiorPalavra.length) {
    maiorPalavra = palavras[i];
  }
}

console.log("Maior palavra:", maiorPalavra);

rl.close();