//Noambre : Juan PAblo Etchart
function mostrar()
{
	let numeroIngresado;
	let contadorPar;

	numeroIngresado=parseInt(prompt("ingrese un numero"))
	while(isNaN(numeroIngresado))
	{
		numeroIngresado=parseInt(prompt("Error, ingrese un numero valido"))
	}// fin de validacion
	contadorPar=0;

	for(let i=1;i<numeroIngresado;i++)
	{
		if(i%2==0)
		{
			contadorPar+=1;
			console.log(i);
		}
		
	}
	console.log("la cantidad de numeros pares es: "+contadorPar);

}//FIN DE LA FUNCIÓN