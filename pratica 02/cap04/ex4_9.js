const frm = document.querySelector("form");
const resp1 = document.querySelector("#outResp1");
const resp2 = document.querySelector("#outResp2");

frm.addEventListener("submit", (e) => {
e.preventDefault();
const valor = Number(frm.inValue.value);

if(valor < 1){
resp1.innerText = `Valor R$ ${valor.toFixed(2)} Insuficiente`;
frm.inValue.focus();
return;
}
if (valor >= 1 ) {
    let resto = valor % 1.00;
    resp1.innerText = `Tempo: 30min`
    resp2.innerText = `Troco R$: ${resto.toFixed(2)}`;   
} if (valor >= 1.75) {
    let resto = valor % 1.75;
    resp1.innerText = `Tempo: 60min`
    resp2.innerText = `Troco R$: ${resto.toFixed(2)}`;
} if (valor >= 3.00){
    let resto = valor % 3.00;
    resp1.innerText = `Tempo: 120min`
    resp2.innerText = `Troco R$: ${resto.toFixed(2)}`;
}


});
