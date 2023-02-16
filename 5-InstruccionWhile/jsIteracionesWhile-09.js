/*
Nombre: Juan Pablo Etchart
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/

/* function mostrar()
{	// declarar variables
	let banderaDelPrimero;
	let numeroIngresado;
	let numeroMaximo;
	let numeroMinimo;
	let respuesta;
	//iniciar variables
	banderaDelPrimero=true;
	respuesta='si';

	while(respuesta=="si"||respuesta=="SI"||respuesta=="sI"||respuesta=="Si")
	{
		numeroIngresado=parseInt(prompt("ingrese un numero: "));
		while(isNaN(numeroIngresado))
		{
			numeroIngresado=parseInt(prompt("Error, ingrese un nnumero"));
		}//fin del while validacion
		
		//bajada de bandera
		if(banderaDelPrimero== true)
		{
			numeroMinimo=numeroIngresado;
			numeroMaximo=numeroIngresado;
			banderaDelPrimero= false;
		}
		else if (numeroIngresado>numeroMaximo)
		{
			numeroMaximo=numeroIngresado;
		}
		else if (numeroIngresado<numeroMinimo)
		{
			numeroMinimo=numeroIngresado;
		}
		respuesta=prompt("desea continuar? si/no");
		console.log(numeroMinimo)
	}
	document.getElementById("txtIdMaximo").value=numeroMaximo;
	document.getElementById("txtIdMinimo").value=numeroMinimo;
}//FIN DE LA FUNCIÓN */

//9 BIS-------------------------

/* While 9 bis: Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.
El menor de los pares y el mayor de los negativos ...(solo si hay) */

function mostrar()
{
	let numeroIngresado;
	let numeroDeVueltas;
	let vueltas;
	let numeroMaximo;
	let numeroMinimo;
	let menorPar;
	let mayorNegativo;
	let flagNegativo;
	let flagPar;
	let flagNumero;

	flagNegativo=false;
	flagPar=false;
	vueltas=0
	flagNumero=false;
	//pido la cantidad de datos que se desea ingresar
	numeroDeVueltas=parseInt(prompt("ingresar la candidad de numero que queres ingresar"));

	while (isNaN(vueltas))
	{
		numeroIngresado=parseInt(prompt("Error,ingrese un numero valido"));
	}//validacion del numero de vueltas

	while(vueltas<numeroDeVueltas)
	{
		//pido numero
		numeroIngresado=parseInt(prompt("ingrese un numero"));	
		//valido numero
		while(isNaN(numeroIngresado))
		{
			numeroIngresado=parseInt(prompt("Error,ingrese un numero valido"));
		}
		//numero menor y mayor
		if(flagNumero==false)
		{
			numeroMaximo=numeroIngresado;
			numeroMinimo=numeroIngresado;
			flagNumero=true;
		}
		else if(numeroMaximo<numeroIngresado)
		{
			numeroMaximo=numeroIngresado;
		}
		else if(numeroMinimo>numeroIngresado)
		{
			numeroMinimo=numeroIngresado;
		}
		//numeros negativos
		if(numeroIngresado<0)
		{
			if(flagNegativo==false)
			{
				mayorNegativo=numeroIngresado;
				flagNegativo=true;
			}else if(mayorNegativo<numeroIngresado)
			{
				mayorNegativo=numeroIngresado;
			}
		}	
		//numero pares
		if(numeroIngresado%2==0)
		{
			if(flagPar==false)
			{
				menorPar=numeroIngresado;
				flagPar=true;
			}
			else if(menorPar>numeroIngresado)
			{
				menorPar=numeroIngresado;
			}

		}
		//le sumo 1 a la vuelta para que se acerque al numeroDeVueltas
		vueltas+=1;
		
	}
	//si no hay numero negativos
	if (flagNegativo==false)
	{	
		mayorNegativo="no hay numero negativos";
	}
	//si no hay numeros pares
	if(flagPar==false)
	{
		menorPar="no hay numeros parese";
	}
	//le paso los datos
	document.write("el numero mayor: "+numeroMaximo+"<br>");
	document.write("el numero menor: "+numeroMinimo+"<br>");
	document.write("el numero mayor negativo es: "+mayorNegativo+"<br>");
	document.write("el numero menor par es: "+menorPar+"<br>");
	
}//fin de la funcion
