import readline from "node:readline/promises";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let nota = await rl.question("Digite uma nota:\n");
// Converter a string para number 
nota = Number(nota);

switch (nota) {
  case 0:
  case 1:
  case 2:
  case 3:
  case 4:
  case 5:
    console.log("Muito ruim");
    break;
  case 6:
  case 7:
    console.log("Médio");
    break;

  case 8:
  case 9:
  case 10:
    console.log("Muito bom");
    break;
  default:
    console.log("Por favor, digite uma nota de 0 a 10");
}

rl.close();

