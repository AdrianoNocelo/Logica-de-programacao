// Operador Lógico NOT
//
// O operador lógico NOT é descrito com o caracter de exclamação (!)

let temSol = false;

if (!temSol) {
  console.log("Não vou sair de casa");
} else {
  console.log("Vou sair de casa")
}

// Usando com outros operadores

let idade = 18;
let temCnh = false;

if (idade < 18 && !temCnh) {
  console.log("Não pode dirigir pq é menor e não tem CNH")
} else if (idade < 18 && temCnh) {
  console.log("Não pode dirigir pq é menor")
} else if (idade >= 18 && !temCnh) {
  console.log("Nao pode dirigir pq nao tem CNH")
} else {
  console.log("Pode dirigir")
}

