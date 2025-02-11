// Aula Bonus
//
// Ternary if ou If ternário

const username = "Adriano";
let acao = "";

/*
if (username === "Adriano") {
  acao = "atualizar o usuario"
} else {
  acao = "criar um usuario"
}
*/

acao = username === "Adriano" ? "Username já está em uso" : "criar um usuario"

console.log(acao)
