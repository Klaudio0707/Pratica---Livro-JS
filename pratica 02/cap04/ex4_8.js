const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
e.preventDefault();
const velPermitida = Number(frm.inVelocidadeP.value);
const velCondutor = Number(frm.inVelocidadeC.value);
let Velocidade20 = velPermitida * 0.20;
let semMulta = velPermitida + Velocidade20;
let multaGrave = (velPermitida + Velocidade20)+Velocidade20;
let multaLeve = velPermitida + Velocidade20;


if (velCondutor  <= semMulta) {
resp.innerText = `Sem Multa `
}else if (velCondutor >= multaLeve && velCondutor >= multaGrave) {
    resp.innerText = `Multa Leve`;
}else{
resp.innerText = `Multa Grave`;
}


});