/*
Nombre: Juan Pablo Etchart
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	//declarar contadores y variables 
	let respuesta;
	let numeroIngresado;
	let sumaNegativos;
	let sumaPositivos;
	let contNegativos;
	let contPositivos;
	let contCeros;
	let contPares;
	let promedioNeg;
	let PromedioPos;
	let diferencia;

	sumaPositivos=0;
	sumaNegativos=0;
	contNegativos=0;
	contPositivos=0;
	contCeros=0;
	contPares=0;

	respuesta="si";

	while(respuesta=="si"||respuesta=="SI"||respuesta=="sI"||respuesta=="Si")
	{
		numeroIngresado=parseInt(prompt("ingrese un numero: "));
		while(isNaN(numeroIngresado))
		{
			numeroIngresado=parseInt(prompt("Error, ingrese un numero"));
		}//fin de validacion
		if(numeroIngresado<0)
		{
			sumaNegativos+=numeroIngresado;
			contNegativos+=1;
		}
		else if(numeroIngresado>0)
		{
			sumaPositivos+=numeroIngresado;
			contPositivos+=1;
		}else
		{
			contCeros+=1;
		}
		if(numeroIngresado%2==0)
		{
			contPares+=1;
		}
		respuesta=prompt("desea continuar? si/no");
	}//fin del while
	
	PromedioPos=sumaPositivos/contPositivos;
	promedioNeg=sumaNegativos/contNegativos;// si ingresamos todo 0 devuelve NaN porque 0/0 en js es NaN
	diferencia= sumaPositivos-sumaNegativos;

	if (isNaN(promedioNeg))
	{
		promedioNeg="no se ingresaron numeros negativos";
	}else if(isNaN(PromedioPos))
	{
		PromedioPos="no se ingresaron numeros positivos";
	}

	document.write("la suma de negativos es: "+sumaNegativos+"<br>");
	document.write("la cant de negativos es: "+contNegativos+"<br>");
	document.write("la suma de positivos es: "+sumaPositivos+"<br>");
	document.write("la cant de positivos es: "+contNegativos+"<br>");
	document.write("la cant de ceros es: "+contCeros+"<br>");
	document.write("la cant de pares es: "+contPares+"<br>");
	document.write("la diferencia: "+diferencia+"<br>");
	document.write("el promedio de negativos es: "+promedioNeg+"<br>");
	document.write("el promedio de positivos: "+PromedioPos+"<br>");
	
}//FIN DE LA FUNCIÓN