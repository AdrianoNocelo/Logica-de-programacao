import readline from "node:readline/promises";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let temperaturaGraus = await rl.question("Digite a temperatura em graus Celsius: ");

if (Number(temperaturaGraus) >= 37.5 ) {
    console.log("Você está com febre.")
} else {
    console.log("Você não está com febre.")
}

rl.close();