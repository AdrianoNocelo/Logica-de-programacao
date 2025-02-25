import readline from "node:readline/promises";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let senha = await rl.question("Digite a senha: ");

if(Number(senha) === 1234 || Number(senha) === 9999) {
    console.log(" A senha está correta.")
} else {
    console.log("A senha não está correta.")
}

rl.close();
