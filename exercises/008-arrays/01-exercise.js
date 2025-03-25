import readline from "node:readline/promises";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let listaDeCompras = ["banana", "pão", "ovo", "requeijão", "sabonete" ];

    for (let i = 0; i < listaDeCompras.length; i++){
      console.log(listaDeCompras[i]);
}

    rl.close();