const frm = document.querySelector("form");
const resp1 = document.querySelector("h2");
const resp2 = document.querySelector("h3");


frm.addEventListener("submit", (e)  => {
    const produto = frm.inProduto.value;
    const preco = Number(frm.inPreco.value);


//const produto = frm.inProduto.value;
  // calcula valores
  const terceiro = preco / 2;
  const total = (preco * 2) + terceiro;

  resp1.innerText = `${produto} - Promoção: Leve 3 por R$: ${total.toFixed(2)}`;
  resp2.innerText = `O 3º produto custa apenas R$: ${terceiro.toFixed(2)}`;


e.preventDefault();

});