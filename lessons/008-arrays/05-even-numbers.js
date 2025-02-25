//---------------- Printar os numeros pares dentro de uma lista ----------------

const numeros = [2, 3, 6, 8, 1, 7, 8, 0, 1, 2, 4];

// Inicializacao, condicao, incremento
for (let i = 0; i < numeros.length; i++) {

  if (numeros[i] % 2 === 0) {
    console.log(numeros[i]);
  }
}

