import readline from "node:readline/promises";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let idade = await rl.question("Digite a sua idade: ");

if (Number(idade) >= 18 && Number(idade) <= 65 ) {
    console.log("Você é obrigado a votar.")
}   else {
    console.log("Você não é obrigado a votar.")
}

rl.close();