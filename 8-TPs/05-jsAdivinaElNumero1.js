/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
//"txtIdNumero""txtIdIntentos"
var numeroSecreto; 
var contadorIntentos; 


function comenzar()
{
	//Genero el número RANDOM entre 1 y 100
	numeroSecreto=Math.floor(Math.random()*100+1);
	console.log(numeroSecreto);
  contadorIntentos=0;
  document.getElementById("txtIdIntentos").value=contadorIntentos;
  alert("ingrese el primer numero y verifique para comenzar")
  
  
  
  //alert(numeroSecreto );
	

}

function verificar()
{
  let numeroIngresado;
  let mensaje;
  contadorIntentos=contadorIntentos+1
  document.getElementById("txtIdIntentos").value=contadorIntentos;
  numeroIngresado=parseInt(document.getElementById("txtIdNumero").value);
  

  if (numeroIngresado==numeroSecreto)
  {
    mensaje="Usted es un ganador!!! y en solo en "+contadorIntentos+" intentos";
  }else if(numeroIngresado<numeroSecreto)
  {
    mensaje="Falta..";
  }else if(numeroIngresado>numeroSecreto)
  {
    mensaje="Se paso..";
  }
	alert(mensaje);
}