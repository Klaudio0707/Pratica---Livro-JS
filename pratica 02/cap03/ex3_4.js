const prompt = require("prompt-sync")();
const racao = Number(prompt("Informe o peso da ração: ")); // peso da racao total
const consumoRacao = Number(prompt("Consumo de Ração em Grama por Dia: ")); // informar o consumo em grama do gato
const kgxGrama = (racao * 1000); //Conversão de kg para grama
const duracaoRacaoDias = Math.floor(kgxGrama/consumoRacao);
 const sobra = kgxGrama - (consumoRacao * duracaoRacaoDias);

console.log(`Quantide em Grama que sobra: ${kgxGrama.toFixed(2)} gr\n 
Duração da ração por dias ${duracaoRacaoDias} Dias\n 
Consumo diário: ${consumoRacao.toFixed(3)}\n 
Peso da Ração ${racao} kg\n
Sobra ${sobra}gr `);