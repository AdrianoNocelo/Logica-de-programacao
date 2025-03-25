import readline from "node:readline/promises";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let listaDeCompras = ["banana", "pão", "ovo", "requeijão", "sabonete" ];
let strAcc = "";
    for (let i = 0; i < listaDeCompras.length; i++){

      if (listaDeCompras){
        strAcc = strAcc + i + "";

      }
}

console.log(listaDeCompras[4]);

    rl.close();