const frm = document.querySelector("form");
const resposta = document.querySelector("h2");


frm.addEventListener("submit", (e) => {
    e.preventDefault();
const preco = Number(frm.inPreco.value);
const medicamento = frm.inRemedio.value;

 const arredondamento = Math.floor (preco); // o Math.floor removeu o valor decimal de preço

const result = (arredondamento * 2);
resposta.innerHTML = `Promoção: Leve 2 ${medicamento} e pague só R$ ${result.toFixed(2)}`;


});