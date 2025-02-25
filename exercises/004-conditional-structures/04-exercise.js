import readline from "node:readline/promises";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let nota1 = await rl.question("Digite a primeira nota: ");
let nota2 = await rl.question("Digite a segunda nota: ");
let media = (Number(nota1) + Number(nota2)) / 2;
console.log(media);

if (Number(nota1) < 5 || Number(nota2) < 5 || media < 7){
    console.log("Aluno reprovado.")
}   else {
    console.log("Aluno aprovado.")
}

rl.close();