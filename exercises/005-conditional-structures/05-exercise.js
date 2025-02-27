import readline from "node:readline/promises";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let planos = await rl.question("Escolha o tipo de assinatura: \n 1 - Plano Básico \n 2 - Plano Padrão \n 3 - Plano Premium \n Digite o numero da opção desejada: ");

switch (Number(planos)){
  case 1:
    console.log("Plano Básico: Acesso a conteúdos gratuitos");
    break;
  case 2:
    console.log("Plano Padrão: Acesso a conteúdos premium");
    break;
  case 3:
    console.log("Plano Premium: Acesso total e suporte prioritário");
    break;
  default:
    console.log("Plano inválido");  

}

rl.close();