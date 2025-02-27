import readline from "node:readline/promises";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let nota = await rl.question("Digite um número de 0 a 10: ");

switch (Number(nota)){
  case 0:
  case 1:
  case 2:
    console.log("Muito ruim");
    break;
  case 3:
  case 4:
    console.log("Ruim");
    break;
  case 5:
  case 6:
    console.log("Regular");
    break;
  case 7:
  case 8:
    console.log("Bom");
    break;
  case 9:
  case 10:
    console.log("Excelente");
    break;
  default:
    console.log("Nota inválida");
}

rl.close();