/*
Dado um número inteiro 'n', retorne um array de strings 'answer', onde:

    answer[i] == "FizzBuzz" se i for divisível por 3 e 5.

    answer[i] == "Fizz" se i for divisível por 3.

    answer[i] == "Buzz" se i for divisível por 5.

    answer[i] == i (como string) se nenhuma das condições acima for verdadeira.

Exemplo 1:

Entrada: n = 3
Saída: ["1","2","Fizz"]
Exemplo 2:

Entrada: n = 5
Saída: ["1","2","Fizz","4","Buzz"]
Exemplo 3:

Entrada: n = 15
Saída: ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]
*/


import readline from "node:readline/promises";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const n = await rl.question("Insira um número 😎: ");
const answer = [];

// A magia acontece aqui

rl.close();
