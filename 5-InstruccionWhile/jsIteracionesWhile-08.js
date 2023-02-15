/*
Nombre: Juan Pablo Etchart
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{

	let respuesta;
	let sumaPositivos;
	let multiplicacionNegativos;
	let numeroIngresado;
	let downFlag;

	multiplicacionNegativos=1;
	sumaPositivos=0;
	downFlag=true;
	respuesta='si';

	while(respuesta=="si"||respuesta=="SI"||respuesta=="sI"||respuesta=="Si")
	{
		numeroIngresado=parseInt(prompt("ingrese un numero: "));
		while(isNaN(numeroIngresado))
		{
			numeroIngresado=parseInt(prompt("Error, ingrese un numero"));
		}//fin de validacion
		if(numeroIngresado>=0)
		{
			sumaPositivos+=numeroIngresado;
		}
		else
		{

			multiplicacionNegativos*=numeroIngresado;
		
		}
		respuesta=prompt('ingrese "si" si quiere continuar: ');
	}

	if(downFlag==true)
	{
		multiplicacionNegativos=0;
	}
	
	document.getElementById("txtIdSuma").value=sumaPositivos;
	document.getElementById("txtIdProducto").value=multiplicacionNegativos;

}//FIN DE LA FUNCIÓN