const frm = document.querySelector("form");
const resp = document.querySelector("pre");

frm.addEventListener("submit", (e) => {
    e.preventDefault();
const numeros = Number(frm.inNumeros.value);
let resposta ="";

for (let i = 1; i <=10; i++){
resposta =`${resposta}${numeros} x ${i} = ${numeros * i}\n`

}
resp.innerText = resposta;


});