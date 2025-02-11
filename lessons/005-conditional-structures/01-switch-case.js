import readline from "node:readline/promises";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let animal = await rl.question("Digite o nome de um animal:\n");

// Switch case - Também é uma estrutura condicional como o if
console.log("\ncódigo do switch case\n")

switch (animal) {
  case "Dinossauro":
    console.log("Está extinto 🦖");
    break;
  case "Vaca":
    console.log("Está vivendo 🐮");
    break;
  default:
    console.log("Não conheço esse animal...");
}

// O código de cima equivale ao de baixo
//
console.log("\nCódigo do if:\n")

if (animal === "Dinossauro") {
  console.log("Está extinto");
} else if (animal === "Vaca") {
  console.log("Está vivendo");
} else {
  console.log("Não conheço esse animal...")
}

rl.close()
