const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
e.preventDefault();

const numeros = Number(frm.inNumeros.value);

let resposta = "";

for ( let i =1; i == numeros; i-- ){
    
resposta = resposta `${resposta}${i}`;



}






});