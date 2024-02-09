let titulo = document.querySelector('h1');
titulo.innerHTML='Hora del desafio';

function userClick(){
    alert('El boton fue clicado');
}
function promtClick(){
    alert('Estuve en Republica Checa y me acorde de ti');
}

function alertClick(){
    alert('I love JS');
}

function sumaClick(){
    let input1 = prompt('Ingresa el primer numero');
    let num1=parseFloat(input1);

    let input2 = prompt('Ingresa el segundo numero');
    let num2=parseFloat(input2);

    let resultado = num1 + num2;
    alert('La sume es ' + resultado);
}