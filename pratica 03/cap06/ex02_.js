const frm = document.querySelector("form");
const resp = document.querySelector("pre")

const carros = []; // vetores = array                         

frm.addEventListener("submit", (e) => {
e.preventDefault();

const modelo = frm.inModelo.value;
const preco = Number(frm.inPreco.value);
carros.push({modelo,preco});
frm.inModelo.value = "";
frm.inPreco.value = "";
frm.inModelo.focus();
frm.btListar.dispatchEvent(new Event("click"))// ao apertar o botão submit, o botão listar é acionado em seguida.
});
frm.btListar.addEventListener("click", () => {
if(carros.length == 0){
alert("Não há carros na lista");
return
}
const lista = carros.reduce((acumulador,carro) =>
acumulador + carro.modelo + "- R$: " + carro.preco.toFixed(2) + "\n", "");
resp.innerText = ` Lista dos Carros Cadastrados\n${"-" .repeat(40)}\n${lista}`;
});
frm.btFiltrar.addEventListener("click", () => {
const maximo = Number(prompt("Qual o valor máximoque o cliente deseja pagar? "));
if(maximo == 0 || isNaN(maximo)){
return;

}
const carrosFilter = carros.filter(carro => carro.preco <= maximo)
if(carrosFilter.length == 0 ){
alert("Não há carros com preço inferior ou igual ao solicitado");
return;
}
let lista = "";
for(const carro of carrosFilter){
lista += `${carro.modelo} - R$: ${carro.preco.toFixed(2)}\n`;


}
resp.innerText = `Carros Até R$: ${maximo.toFixed(2)}\n ${"-".repeat(40)}\n ${lista}`;

});
frm.btSimular.addEventListener("click", () => {
const desconto = Number(prompt("Qual o percentual de desconto: "));
if(desconto == 0){
return;


}
const carrosDesc = carros.map(aux => ({
modelo: aux.modelo,
preco: aux.preco - (aux.preco * desconto/100)
}))
let lista = "";
for(const carro of carrosDesc) {
lista += `${carro.modelo} - R$: ${carro.preco.toFixed(2)}\n `;


}
resp.innerText = `Carros com desconto: ${desconto}%\n ${"-".repeat(40)}\n ${lista}\n`;
});



