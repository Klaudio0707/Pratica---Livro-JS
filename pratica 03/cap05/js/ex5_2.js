const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
e.preventDefault();

const numero = Number(frm.inNumeros.value);

let resposta = "";

// for (let i = numero; i > 0; i = i -1 ){
    
// resposta = resposta + i + ", ";



// }
// resp.innerText = resposta;

// for(let i = numero; i > 0; i-- ){
// if(i == 1){
//     resposta = resposta +i+ ".";

// }else{
// resposta = resposta +i+ ",";

// }
// resp.innerText = resposta;


for (let i = numero; i > 1 ; i-- ){
resposta = resposta + i + ", "


}
resposta = resposta + "1."




});