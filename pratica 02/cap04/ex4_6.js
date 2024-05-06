const frm = document.querySelector("form");
const resp = document.querySelector("#resp");
const resp1 = document.querySelector("#resp1");
const resp2 = document.querySelector("#resp2");

frm.addEventListener("submit", (e) => {
    e.preventDefault();
const saque = Number(frm.inSaque.value);
if(saque % 10 != 0){
alert("Valor inválido para notas disponíveis (R$10, 50, 100)");
frm.inSaque.focus();
return;
}

const notasCem = Math.floor(saque/100); // ver quantas cedulas de 100 é possivel nesse vaalor

let resto = saque % 100; // caso o valor ultrapasse os 100, passa o resto para essavaria vel

const notasCinquenta = Math.floor(resto/50);
resto = resto % 50;
const notasDez = Math.floor(resto / 10);
if (notasCem >0) {
    resp.innerText = `Notas de R$ 100: ${notasCem}`;       
}
if (notasCinquenta>0) {
resp1.innerText = `Notas de R$ 50: ${notasCinquenta}`

}
if (notasDez >0) {
    resp2.innerText = `Notas de R$10,00: ${notasDez}`;
    
}

});