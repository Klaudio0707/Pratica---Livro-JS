const prompt = require("prompt-sync")();
console.log("Informe o valor dos saques ou 0 para sair");
const saques = [];
do{
    const valor = Number(prompt("Saque R$: "));
    if(valor == 0){
break


    }


saques.push(valor);

if(valor % 10 == 0 ){  // se o resto da divisão é 0, então o saque é realizado
console.log("Saque Realizado com Sucesso");


}else{
console.log("Erro... Valor inválido(deve ser o múltiplo de 10)"); // Caso não, o saque não é realizado
}

}while(true)
console.log("\nSaques Válidos");
console.log("-".repeat(40));
const saquesValidos = saques.filter(saque => saque % 10 == 0 ); // Filter realizar a filtragem mediante ao parametro. O filtro 
// O parametro do filtro solicitar que o resto da divisão do saque seja 0 e o armazena na variavel saquesValidos.
for (const saque of saquesValidos){
console.log(saque.toFixed(2));

}
console.log("-".repeat(40));
const totalSacado = saquesValidos.reduce((total, saque) => total + saque, 0);
console.log(`Total dos Saques: R$ ${totalSacado.toFixed(2)}`);

const saquesInvalidos = saques.length - saquesValidos.length;
console.log(`\nNº de Tentativas de Saques (saques inválidos): ${saquesInvalidos}`);

