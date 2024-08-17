const prompt = require("prompt-sync")();
const veiculo = prompt("veiculo:");
const preco = Number(prompt("preço R$"));
const entrada = preco * 0.50; // pegando 50% do valor do veiculo
const parcela = (preco * 0.50)/12 // Dividindo metade do veiculo em 12X
console.log(`Promoção: ${veiculo}`); //informando o valor do veiculo kkkk
console.log(`Entrada de R$ ${entrada.toFixed(2)}`); // Informando a entrada de 50% do veiculo
console.log(`+12x de R$ ${parcela.toFixed(2)}`); // Informando o valor do carro parcelado em 12x
