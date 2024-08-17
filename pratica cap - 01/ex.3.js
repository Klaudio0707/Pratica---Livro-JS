const frm = document.querySelector("form");
const resp1 = document.querySelector("#outResp1");
const resp2 = document.querySelector("#outResp2");
const resp3 = document.querySelector("#outResp3");

frm.addEventListener("submit", (e) =>{
    e.preventDefault();   
const veiculo = frm.inVeiculo.value;
const preco = Number(frm.inPreco.value);

const entrada = preco * 0.50 ; // calcula o valor da entrada para saber os 50% restante
const parcela = (preco * 0.50) / 12 // pegar o valor dos 50% e depois divide em 12 vezes
resp1.innerText = `Promoçao: ${veiculo}`;
resp2.innerText = `Entrada de R$: ${entrada.toFixed(2)}`;
resp3.innerText = `+12x de R$ ${parcela.toFixed(2)}`;


})