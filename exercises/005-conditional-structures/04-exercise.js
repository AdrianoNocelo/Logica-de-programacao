import readline from "node:readline/promises";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let menu = await rl.question("Escolha um prato: \n 1 - Pizza \n 2 - Hambúrguer \n 3 - Salada \n Digite a opção desejada: ");

switch (Number(menu)){
  case 1:
    console.log("Você escolheu Pizza.");
    break;
  case 2:
    console.log("Você escolheu Hambúrguer.");
    break;
  case 3:
    console.log("Você escolheu Salada");
    break;
  default:
    console.log("Opção inválida");  

}

rl.close();