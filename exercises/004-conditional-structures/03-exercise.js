import readline from "node:readline/promises";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let nome = await rl.question("Digite o seu nome: ");
let senha = await rl.question("Digite a senha: ");

if(Number(senha) === 1234 && nome === "admin") {
    console.log(" A senha está correta.")
} else {
    console.log("A senha não está correta.")
}

rl.close();
