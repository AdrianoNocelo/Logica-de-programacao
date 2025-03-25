import readline from "node:readline/promises";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let palavras = ["banana", "pão", "ovo", "requeijão", "sabonete", "presunto", "queijo", "sabão", "alface", "iogurte" ];
let contadorDeCaracteres = 0;
let strAcc = "";
    for (let i = 0; i < palavras.length; i++){
        const letraAtual = palavras[i]; 
      
        if (letraAtual === 5){
            console.log(letraAtual);
        }
        if (palavras){
        strAcc = strAcc + i + "";
        
        contadorDeCaracteres += 1;
      }
}

console.log(letraAtual);

    rl.close();