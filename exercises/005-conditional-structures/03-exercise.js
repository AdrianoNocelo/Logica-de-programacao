import readline from "node:readline/promises";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let mes = await rl.question("Digite um número de 0 a 12: ");

switch (Number(mes)){
    case 1:
    case 2:
    case 12: 
        console.log("Verão");
        break;
    case 3:
    case 4:
    case 5:
        console.log("Outono");
        break;
    case 6:
    case 7:
    case 8:
        console.log("Inverno");
        break;
    case 9:
    case 10:
    case 11:
        console.log("Primavera");
        break;
    default: 
        console.log("Este mês não existe.");
 }

rl.close();