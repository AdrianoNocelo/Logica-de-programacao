# Exercícios de Arrays

## Lista de compras
- Crie um array com 5 itens de uma lista de compras.
- Exiba cada item no console.

## Último elemento
- Crie um array com 5 nomes.
- Exiba o último elemento do array.

## Dobrar valores
- Peça ao usuário 5 valores
- Dobre todos os valores do array.
- Exemplo de saída:
```
Valor 1: 10
Valor 2: 20
Valor 3: 30
Valor 4: 40
Valor 5: 50
Dobrado: 20, 40, 60, 80, 100
```
- Dica: Para pedir múltiplos valores ao usuário, você pode usar um loop.
```js
const valores = [];

for (let i = 0; i < 5; i++) {
  await rl.question('Valor ' + (i + 1) + ': '); // Pede ao usuário o valor
  valores.push(parseInt(rl.line)); // Adiciona o valor ao array
}

for (let i = 0; i < valores.length; i++) {
  // Dobre o valor aqui
}
```

## Filtrando palavras curtas
- Crie um array com 10 palavras.
- Exiba apenas as palavras com menos de 5 letras.

## Média de notas
- Peça ao usuário 5 notas.
- Calcule a média das notas.
- Exiba a média no console.
- Exemplo de saída:
```
Nota 1: 8
Nota 2: 9
Nota 3: 7
Nota 4: 5
Nota 5: 10
Nota 6: 3
Média: 7.5
```

## Ache a maior nota
- Peça ao usuário 5 notas.
- Ache a maior nota.
- Exiba a maior nota no console.
- Exemplo de saída:
```
Nota 1: 8
Nota 2: 9
Nota 3: 7
Nota 4: 5
Nota 5: 10
Nota 6: 3
Maior nota: 10
```

## Ache a maior palavra
- Peça ao usuário 5 palavras.
- Ache a maior palavra.
- Exiba a maior palavra no console.
- Exemplo de saída:
```
Palavra 1: macaco
Palavra 2: cachorro
Palavra 3: gato
Palavra 4: rato 
Palavra 5: tigre 
Maior palavra: cachorro
```
