import readline from "node:readline/promises";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let valorTotalDaCompra = await rl.question("Digite o valor total da compra: ") ;
let vip = await rl.question("Você é um cliente vip? ");

if (Number(valorTotalDaCompra) >= 100 || vip === "sim") {
    console.log("O cliente tem direito a um desconto.")
}   else {
    console.log("O cliente não tem direito a um desconto.")
}

rl.close();