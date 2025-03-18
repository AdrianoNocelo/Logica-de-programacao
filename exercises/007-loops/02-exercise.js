import readline from "node:readline/promises";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const numero = Number(await rl.question("Digite um número: "));
let acc = 0;
let strAcc = "";

// inicializacao, condicao, incremento
for (let i = 1; i <= numero; i++) {
  console.log("======= Iteracao " + i + "=======")
  console.log("acc: " + acc)
  console.log("i: " + i)

  acc = acc + i;

  // Verifico se é a última volta e coloco o simbolo de igual ao inves do mais
  if (i === numero) {
    strAcc = strAcc + i + " = "
  } else {
    strAcc = strAcc + i + " + "
  }

  console.log("strAcc: " + strAcc)
  console.log("===== Fim Iteracao " + i + "=====")
}

console.log(strAcc + acc);

rl.close();
