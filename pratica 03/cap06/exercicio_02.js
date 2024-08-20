const frm = document.querySelector("form");
const resp = document.querySelector("pre");
const outOrdem = document.querySelector("#outResp");


const numeros = [];

frm.addEventListener("submit", (e) => {
e.preventDefault();

const num = Number(frm.inNumero.value);

   
    if(numeros.includes(num)){
        alert("numero repetido");
        frm.reset();
        return

    }else{
        numeros.push(num);
        listar();
        frm.reset();
        frm.inNumero.focus();
    }


    });

function listar(){
    let lista = "" ;
    for (const numero of numeros) {

        lista += numero + "\n"
      }
    
      resp.innerText = lista;    
}
frm.btnOrdem.addEventListener("click", () => {
    const num = Number(frm.inNumero.value);   
const numOrdenado = numeros.filter(numb => numb >= num); 
const numDesordenado = numeros.filter(numb => numb < num);
if (numOrdenado.length === 0){
outOrdem.innerText = "Está em ordem Crescente";

}else {   
outOrdem.innerText = "Está em ordem Decrescente";

}


    

});



