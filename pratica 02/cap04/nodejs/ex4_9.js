const prompt = require("prompt-sync")();
const compra = Number(prompt("informe o valor total da compra "));
const parcelamento = Number(prompt("parcelar em quantas vezes? "));
let parcela = compra/parcelamento;
if (parcela < 20 || parcelamento > 6) {
 console.log("parcelamento não permitido");   
    
}else{
console.log(`Valor de cada Parcela ${parcela.toFixed(2)}\n
Quantas Parcelas ${parcelamento}x\n
Valor total da Compra ${compra.toFixed(2)} `);

};