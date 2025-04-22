import readline from "node:readline/promises";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const notas = [];
let soma = 0;
    for (let i = 0; i < 5; i++){
        let resposta = await rl.question("Nota " + (i + 1) + ": ");
        notas.push(parseInt(resposta));
}
    
    for (let i = 0; i < notas.length; i++){
        soma += notas[i];
        
    }
    let media = soma / notas.length;
    console.log("Média: " + media);

rl.close();