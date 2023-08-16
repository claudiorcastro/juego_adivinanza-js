let numeroAzar = Math.floor(Math.random() * 100) + 1;
let numeroEntrada = document.getElementById('numeroEntrada');
let mensaje = document.getElementById('mensaje');


function chequearResultado(){
    let numeroIngresado = parseInt(numeroEntrada.value)

    if(numeroIngresado < 1 || numeroIngresado > 100 || isNaN(numeroIngresado)){
        mensaje.textContent = 'Por favor, introduce un numero valido entre 1 y 100'
        mensaje.style.color = 'black';
        return
    }

    if(numeroIngresado === numeroAzar){
        mensaje.textContent = '¡Felicitaciones! Adivinaste el número';
        mensaje.style.color = 'green';
        numeroIngresado.disable = true;
    }else if(numeroIngresado < numeroAzar){
        mensaje.textContent = 'Mas alto, el número es mayor al elegido';
        mensaje.style.color = 'red';
    }else{
        mensaje.textContent = 'Mas bajo, el número es menor al elegido';
        mensaje.style.color = 'red';
    }

}