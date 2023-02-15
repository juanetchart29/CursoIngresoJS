/*
Nombre: Juan Pablo Etchart
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	var contador;
	var acumulador;
	var respuesta;
	let numeroIngresado;

	contador=0;
	acumulador=0;
	respuesta='si';

	while(respuesta=="si"||respuesta=="SI"||respuesta=="sI"||respuesta=="Si"){
		numeroIngresado=parseInt(prompt("Ingrese un numero"));	
		contador+=1
		respuesta=prompt('ingrese "si" si quiere continuar: ')
		acumulador+=numeroIngresado
	}

	console.log(contador)
	txtIdSuma.value=acumulador;
	txtIdPromedio.value=acumulador/contador;

}//FIN DE LA FUNCIÓN