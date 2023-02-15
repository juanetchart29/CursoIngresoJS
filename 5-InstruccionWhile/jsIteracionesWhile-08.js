/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	var contador;
	var respuesta;
	var sumaPositivos;
	var multiplicacionNegativos;
	let numeroIngresado

	contador=0;
	sumaPositivos=0;
	multiplicacionNegativos=1;
	respuesta='si';

	while(respuesta=="si"||respuesta=="SI"||respuesta=="sI"||respuesta=="Si"){
		numeroIngresado=parseInt(prompt("ingrese un numero: "));
		respuesta=prompt('ingrese "si" si quiere continuar: ')
		if(numeroIngresado>=0)
		{
			sumaPositivos+=numeroIngresado;
		}else
		{
			multiplicacionNegativos*=numeroIngresado;
		}
	}
	

	txtIdSuma.value=sumaPositivos;
	txtIdProducto.value=multiplicacionNegativos;

}//FIN DE LA FUNCIÓN