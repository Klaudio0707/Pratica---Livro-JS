const frm =document.querySelector("form");
const resp = document.querySelector("h2");

frm.addEventListener("submit", (e) =>{

    
const tempo = Number(frm.inUso.value);
const valor = Number(frm.inValueMin.value);

// aqui informa o valor da sobra



//const resultado = (calculo * consumo);





// calcula valor a pagar (arredonda para cima)
const pagar = Math.ceil(tempo / 15) * valor
alert(pagar.toFixed(9));
// exibe o valor a pagar (com 2 decimais)
resp.innerText = `Valor a Pagar R$: ${pagar.toFixed(2)}`

e.preventDefault()  

});


// cria referência ao form e ao elemento h3 (onde será exibida a resposta)
