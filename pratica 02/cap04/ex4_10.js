const frm = document.querySelector("form");
const resp1 = document.querySelector("#resp1");
const resp2 = document.querySelector("#resp2");

frm.addEventListener("submit", (e) => {
e.preventDefault();    
const valorA = Number(frm.inLadoA.value);
const valorB = Number(frm.inLadoB.value);
const valorC = Number(frm.inLadoC.value);

let calculo = valorA+valorB+valorC;

if (valorA > (valorB+valorC) || valorB > (valorA+valorC)|| valorC > (valorA+valorB) ) {
  resp1.innerText = `Lados não podem formar um  Triângulo!`; 

}else{
resp1.innerText = `Lados podem formar um triângulo!`;    



} 
if (calculo %3 == 0 ){
alert("hello");
};


});
