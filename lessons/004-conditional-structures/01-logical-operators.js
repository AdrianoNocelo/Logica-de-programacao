// Um operador lógico é uma ferramenta que usamos para combinar condições em programação
//
// Temos dois tipos de operadores lógicos && (And ou E) e || (Or ou Ou)
//
// 
// And: Se eu tiver tempo E dinheiro, vou fazer aula de inglês
// As duas condições tem q ser verdadeiras, para eu fazer aula de inglês
// Ou seja, preciso ter tempo e dinheiro
//
// Or: Se eu tiver dinheiro OU alguém pagar para mim, eu vou no rolê
// Apenas um condição tem q ser verdadeiras
// Ou seja, preciso ter dinheiro ou q alguém pague para mim
//

// Operador E ou AND ou &&
let tenhoDinheiro = true;
let tenhoTempo = true;

// Se alguma das condições estiver false, não vamos entrar no if
if (tenhoDinheiro && tenhoTempo) {
  console.log("Vou fazer aula de inglês");

  // Senão, não vamos fazer aula de inglês
} else {
  console.log("Não vou fazer aula de inglês")
}

// Operaror OU ou OR ou ||
let tenhoMoney = true;
let alguemVaiPagarPraMim = false;

// Se alguma condição for verdadeira, a gente vai pro rolê
if (tenhoMoney || alguemVaiPagarPraMim) {
  console.log("Vou no rolê")

  // Senão, vamos ficar em casa
} else {
  console.log("Vou ficar de molho")
}
