const prompt = require ("prompt-sync")(); // adiciona um pacote de entrada de dados
const num1 = Number(prompt("1º Numero: "));
const num2 = Number(prompt("2º Numero: "));

const soma = num1 + num2;
console.log(`Soma é ${soma}`);