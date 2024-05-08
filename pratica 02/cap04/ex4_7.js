const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
e.preventDefault();
const valor = Number(frm.inNumero.value);
let divisao = Math.floor(valor/2);
let multiplicacao = divisao * 2;

if (valor == multiplicacao) {
    resp.innerText = ` O número ${valor} é pa`;

}else{
resp.innerText = `O número ${valor} é ímpar`;
};
alert(multiplicacao);
alert(divisao);
});