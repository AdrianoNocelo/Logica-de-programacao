// Um programa sempre é lido pelo computador de cima para baixo
// e da esquerda para a direita

// AND

let condition1 = true;
let condition2 = true;
let condition3 = false;

// Podemos usar o && para quantas condições quisermos
if (condition1 && condition2 && condition3) {
  // nessa situação vamos realizar 3 "processamentos"
  // e falhar na última, oq exige mais do computador
  // em termos de processamento
}


condition1 = false;
condition2 = true;
condition3 = true;

if (condition1 && condition2 && condition3) {
  // nessa situação vamos realizar 1 "processamento"
  // pq a falha acontece logo no inicio, poupando
  // a verificação das demais condições, acaba por
  // ser mais rápido que o if declarado acima na linha 15
}

// OR

let alguemPagar = false;
let terDinheiro = false;
let roleSerEmCasa = true;

// Podemos usar o || para quantas condições quisermos
if (alguemPagar || terDinheiro || roleSerEmCasa) {
  // Aqui nessa situação vamos verificar todos pq 
  // vai verificar se existe alguma variável verdadeira
  // ta ligado?
  console.log("Vou no role")
}

