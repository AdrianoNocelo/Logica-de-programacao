import readline from "node:readline/promises";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// if - Estrutura condicional

let student = "Ronald McDonald";
let studentScore = await rl.question("Qual a nota do " + student + "?\n");

if (Number(studentScore) < 5) {
  console.log(student + " está reprovado")
} else {
  console.log(student + " está aprovado")
}

rl.close();
