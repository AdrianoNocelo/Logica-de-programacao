// sem IA
import readline from "node:readline/promises";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let tempCelsius = await rl.question("Digite a temperatura em Celsius: ");
let convertFahFah = Number(tempCelsius) * 9 / 5 + 32;

console.log("A temperatura em Fahrenheit é: " + convertFahFah);

rl.close();