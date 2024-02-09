let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;
function asignarTextoElemento(elemento,texto){
   let elementoHTML = document.querySelector(elemento);
   elementoHTML.innerHTML=texto;
   return;
}
function verificarIntento(){
   //se declara la funcion en js y en html se le llama
   //Console.log es para que se imprima solamente en la consola
   let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
   if(numeroDeUsuario === numeroSecreto){
      asignarTextoElemento('p', `Acertaste el numero en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
      document.getElementById('reiniciar').removeAttribute('disabled');
   }
   else{
      //EL usuario no acerto
      if(numeroDeUsuario > numeroSecreto){
         asignarTextoElemento('p','El numero secreto es menor');
      }
      else{
         asignarTextoElemento('p', 'El numero secreto es mayor');
      }
      intentos++;
      limpiarCaja();
   }
   return;
}

function limpiarCaja(){
   /*let valorCaja = document.querySelector('#valorUsuario');//# == getElementById
   valorCaja.value = ''; ES LO MISMO QUE LO DE ABAJO , es otra forma de hacerlo
   */
   document.querySelector('#valorUsuario').value = '';
   
}
function generarNumeroSecreto(){
   let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

   if(listaNumerosSorteados.length == numeroMaximo){
      asignarTextoElemento('p','Ya se sortearon todos los numeros posibles');
   }
   else{
      if(listaNumerosSorteados.includes(numeroGenerado)){
         return generarNumeroSecreto();
      }
      else{
         listaNumerosSorteados.push(numeroGenerado);
         return numeroGenerado;
      }
   }

 }
function condicionesIniciales(){
   asignarTextoElemento('h1','Juego del numero secreto!');
   asignarTextoElemento('p',`Indica unn numero del 1 al ${numeroMaximo}`);
   numeroSecreto = generarNumeroSecreto();
   intentos = 1;
}
function reiniciarJuego(){
   limpiarCaja();
   condicionesIniciales();
   document.querySelector('#reiniciar').setAttribute('disabled','true');

}
condicionesIniciales()

