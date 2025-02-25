import readline from "node:readline/promises";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const informacoesDoUsuario = [];

// Pedir pelo input do usuário
const name = await rl.question("Qual o seu nome?\n");
const sobrenome = await rl.question("Qual o seu sobrenome?\n");
const idade = await rl.question("Qual a sua idade?\n");

informacoesDoUsuario.push(name);
informacoesDoUsuario.push(sobrenome);
informacoesDoUsuario.push(idade);

console.log("\nSuas informacoes sao: \n")
for (let i = 0; i < informacoesDoUsuario.length; i++) {
  console.log(informacoesDoUsuario[i]);
}

rl.close();

