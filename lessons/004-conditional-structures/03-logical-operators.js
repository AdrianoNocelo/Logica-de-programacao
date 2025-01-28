// Podemos também combinar o uso de && e ||
// Para condições que são mais complexas

let idade = 15;
let temPermissaoDosPais = true;
let temIngresso = true;

if ((idade >= 18 || temPermissaoDosPais) && temIngresso) {
  console.log("Pode entrar no encontro das tribos")
} else {
  console.log("Não pode entrar no show")
}
