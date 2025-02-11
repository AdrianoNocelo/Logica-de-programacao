
import readline from "node:readline/promises";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let animal = await rl.question("Digite o nome de um animal:\n");

switch (animal) {
  case "Dinossauro":
    console.log("Está extinto 🦖");
    break;
  // Ao utilizar multiplos cases, teremos o mesmo comportamento do OU usado no if
  case "Girafa":
  case "Vaca":
  case "Cachorro":
  case "Gato":
    console.log("Está vivendo 🐮");
    break;
  default:
    console.log("Não conheço esse animal...");
}

rl.close()
