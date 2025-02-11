// const - constante - um valor que nunca muda
// let - variavel - um valor que muda

// Nao pode alterar depois de declarar
// const name3 = "eros"
// name3 = "adriano"

// Pode alterar depois de declarar
// let name4 = "adriano"
// name4 = "eros"

const name1 = "Eros"
const name2 = "Adriano"

// Isso é uma coisa do JS
const output = name1 || name2;

console.log(output)


const name3 = undefined
const name4 = "Adriano"
const output2 = name3 || name4

console.log(output2)
