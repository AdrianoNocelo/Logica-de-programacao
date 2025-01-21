import readline from "node:readline/promises";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// if - Estrutura condicional
console.log("### Calculadora de IMC ###\n")

let name = await rl.question("Olá, qual o seu nome?\n")

let peso = await rl.question(name + ", qual o seu peso?\n")
let altura = await rl.question("E sua altura?\n")

let parsedPeso = Number(peso);
let parsedAltura = Number(altura);

let imc = parsedPeso / (parsedAltura * parsedAltura)

console.log("O seu IMC é " + imc)

let classificacao;

if (imc < 18.5) {
  classificacao = "Abaixo do peso";
}

if (18.5 <= imc && imc < 25) {
  classificacao = "Normoponderal"
}

if (25 <= imc && imc < 30) {
  classificacao = "Sobrepeso"
}

if (30 <= imc && imc < 35) {
  classificacao = "Obesidade grau 1"
}

if (35 <= imc && imc < 40) {
  classificacao = "Obesidade grau 2"
}

if (40 <= imc) {
  classificacao = "Obesidade grau 3"
}

console.log("Sua classificação é " + classificacao)

rl.close();
