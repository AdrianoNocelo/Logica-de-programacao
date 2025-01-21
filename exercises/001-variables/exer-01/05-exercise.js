let valorEmEuros = 50; 
let taxaDeConversao = 5.50; 
let valorEmReais = valorEmEuros * taxaDeConversao;

console.log(`€${valorEmEuros} equivale a R$${valorEmReais.toFixed(2)} reais.`);
