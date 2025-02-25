import readline from "node:readline/promises";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let senha = await rl.question("Digite a senha: ");

if(Number(senha) === 1234) {
    console.log(" A senha está correta.")
}

rl.close();
