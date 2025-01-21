// INPUT E OUTPUT

import readline from "node:readline/promises";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Pedir pelo input do usuário
let name = await rl.question("Qual o seu nome?\n");

// Concatenação de strings: "Olá, " + "Eros" = "Olá, Eros"
console.log("Olá, " + name);

rl.close();

