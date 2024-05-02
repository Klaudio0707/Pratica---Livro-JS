const prompt = require("prompt-sync")();

const salario = Number(prompt("Informe seu salario "));
const anos =Number(prompt("Informe quantos anos voce tem de empresa "));
const quadrienios = Math.floor(anos/4);
const resultado = quadrienios * salario /100;
console.log(`seu salario ${salario}\n Seu quadrienios ${quadrienios}\n Valor a receber ${resultado+salario}`);



