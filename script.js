function soma() {

    let peso, altura, alturaX2, imc, imgimc, bgimc;

    altura = Number(document.getElementById("altura").value);
    peso = Number(document.getElementById("peso").value);
    altura = altura / 100;
    alturaX2 = altura * altura;
    imc = peso / alturaX2;
    imc = imc.toFixed(2);
    imgimc = document.getElementById("imgimc");
    bgimc = document.getElementById("calcImc")


    document.getElementById("resultado").innerHTML = "Resultado: " + imc;

    if (imc <= 18.5) {
        imgimc.src = "img/Imc1°grau.png";
        bgimc.style.backgroundColor = "#5db7de"
        bgimc.style.transition = "0.5s"
    }

    if (imc >= 18.6) {
        imgimc.src = "img/Imc2°grau.png";
        bgimc.style.backgroundColor = "#9cb538"
        bgimc.style.transition = "0.5s"
    }

    if (imc >= 25) {
        imgimc.src = "img/Imc3°grau.png";
        bgimc.style.backgroundColor = "#f28633"
        bgimc.style.transition = "0.5s"
    }

    if (imc >= 30) {
        imgimc.src = "img/Imc4°grau.png";
        bgimc.style.backgroundColor = "#e64e40"
        bgimc.style.transition = "0.5s"
    }

    if (imc >= 35) {
        imgimc.src = "img/Imc5°grau.png";
        bgimc.style.backgroundColor = "#bf418d"
        bgimc.style.transition = "0.5s"
    }
}
