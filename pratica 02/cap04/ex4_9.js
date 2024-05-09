const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
e.preventDefault();
const valor = Number(frm.inValue.value);

if(valor < 1){
alert("Valor Insuficiente");
frm.inValue.focus();
return;
}
if (valor >= 1 ) {
 resp.innerText = ` Tempo: 60`;   
}









});
