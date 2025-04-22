import readline from "node:readline/promises";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let palavras = ["banana", "pão", "ovos", "leite", "sabonete", "presunto", "água", "sabão", "whey", "suco" ];

    for (let i = 0; i < palavras.length; i++){
        let letraAtual = palavras[i]; 
      
        if (letraAtual.length < 5){
            console.log(letraAtual);
          }
    }

    rl.close();