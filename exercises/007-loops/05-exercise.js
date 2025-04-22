import readline from "node:readline/promises";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let total = 0;

// inicializacao, condicao, incremento 
for (let i = 0; i < 3; i++) {
  const productName = await rl.question("Digite o nome de um produto: \n");
  const productPrice = await rl.question("Digite o valor do produto: \n");
  const productQuantity = await rl.question("Digite a quantidade do produto: \n");

  const productSubTotal = productPrice * productQuantity;

  // total é igual a soma de todos os subtotais
  total = productSubTotal + total;

  console.log(
    "O subtotal do produto " + productName + " é igual a R$" + productSubTotal
  );
  console.log("==========================\n")
}


// Tentar verificar aqui o desconto


console.log("O total é: R$" + total);

rl.close();

