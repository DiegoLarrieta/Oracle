let numeroMayor = 100;
let numeroSecreto = Math.floor( Math.random()*numeroMayor)+1;
let numeroUsuario = 0;
let intentos = 1;
let maximosIntentos = 5;
while(numeroUsuario != numeroSecreto){
    let numeroUsuario = prompt('Me indicas un numero entre el 1 y el ' + numeroMayor + ' por favor:');

    console.log(numeroUsuario);

    if (numeroUsuario == numeroSecreto) {
        alert('Acertaste, el numero es : '+  numeroUsuario + ' lo hiciste en ' + intentos + (intentos == 1 ? ' vez' : ' veces'));
        break;
    }
    else{
        if(numeroUsuario > numeroSecreto){
            alert('El numero secreto es menor');
        }else{
            alert('El numero secreto es mayor');
        }
        intentos++;
        if(intentos > maximosIntentos){
            alert('Llegaste al numero maximo de ' + maximosIntentos + ' intentos');
            break;
        }
    }
}


/*
alert('Bienvenido al juego del número secreto');

// Agrega un console.log para verificar el valor de "intento" después de la entrada del usuario
let intento = prompt('Elige un número entre 1 y 10');
console.log('Valor de intento:', intento);

let numeroSecreto = 4;

// Agrega un console.log para verificar la comparación entre "intento" y "numeroSecreto"
console.log('Resultado de la comparación:', intento == numeroSecreto);

if (intento == numeroSecreto) {
    alert('Adivinaste');
} else {
    // Agrega un console.log para verificar el valor de "numeroSecreto" cuando el jugador se equivoca
    console.log('Valor del número secreto:', numeroSecreto);
    alert('El número secreto era ' + numeroSecreto);
}
*/