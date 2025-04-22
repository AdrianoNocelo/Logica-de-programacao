import readline from "node:readline/promises";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const notas = [];

    for (let i = 0; i < 5; i++){
        let resposta = await rl.question("Nota " + (i + 1) + ": ");
        notas.push(parseInt(resposta));
}
    
let maiorNota = notas[0];

for (let i = 1; i < notas.length; i++) { 
    if (notas[i] > maiorNota) {
        maiorNota = notas[i];
    }
}

console.log("Maior nota: " + maiorNota);
rl.close();
