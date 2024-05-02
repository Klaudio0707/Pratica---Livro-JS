const frm = document.querySelector("form");
const resp1 = document.getElementById("outSaida1")
const resp2 = document.getElementById("outSaida2")

frm.addEventListener("submit", (e) => {
e.preventDefault();
const nome = frm.inNomeAluno.value;
const nota1 = Number(frm.in1Nota.value);
const nota2 = Number(frm.in2Nota.value);
const media = (nota1 + nota2)/2;
resp1.innerText = `Média das notas ${media.toFixed(2)}`;
if(media >=7){
    resp2.innerText=`Parabéns! Você Foi aprovado(a)`
    resp2.style.color = "blue";
}else if(media >=4){
resp2.innerText=`Atenção ${nome}! Você está em exame!` ;
resp2.style.color="Yellow";

    

}else{
resp2.innerText = `Ops ${nome}... Você Foi reprovado(a)`  
resp2.style.color = "Red";  
}



});