//---------------- Somar todos os numeros dentro de uma lista ----------------

const numeros = [4, 5, 6];
let resultado = 0;

// inicializacao, condicao, incremento
for (let i = 0; i < numeros.length; i++) {
  resultado = numeros[i] + resultado;
}

/*
 * const numeros = [4, 5, 6]
 * let resultado = 0;
 *
 * Template iteracao
 * resultado = resultado + numeros[i]
 *
 * 1 iteracao:
 * resultado = 0 + 4
 * agora resultado vale 4
 *
 * 2 iteracao: 
 * resultado = 4 + 5
 * agora resultado vale 9
 *
 * 3 iteracao:
 * resultado = 9 + 6
 * agora resultado vale 15
 */

console.log("A soma dos itens é " + resultado);
