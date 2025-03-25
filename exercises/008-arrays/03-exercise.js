import readline from "node:readline/promises";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const valores = [];

    for (let i = 0; i < 5; i++){
        let resposta = await rl.question("insira " + (i + 1) + " valores: ");
        valores.push(parseInt(resposta));
}

    for (let i = 0; i < valores.length; i++){
        let dobrado = valores[i] * 2;
        console.log("Valores Dobrados: " + dobrado);
    }

rl.close();