




function calcularIMC() {
const peso = parseFloat(document.querySelector("#inPeso").value);
const altura = parseFloat(document.querySelector("#inAltura").value);

let imc = peso/(altura* 2);


    if (imc <= 16.9) {
        alert(`IMC ${imc.toFixed(2)} muito abaixo do peso`);
    } else if (imc <= 18.4) {
        alert(`IMC ${imc.toFixed(2)} abaixo do peso`);
    } else if (imc <= 24.9) {
        alert(`IMC ${imc.toFixed(2)} peso normal`);
    } else if (imc <= 29.9) {
        alert(`IMC ${imc.toFixed(2)} acima do peso`);
    } else if (imc <= 34.9) {
        alert(`IMC ${imc.toFixed(2)} obesidade grau 1`);
    } else if (imc <= 40) {
        alert(`IMC ${imc.toFixed(2)} obesidade grau 2`);
    } else {
        alert(`IMC ${imc.toFixed(2)} obesidade grau 3`);
    }
};