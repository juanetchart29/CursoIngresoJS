/*
Nombre: Juan Pablo Etchart 
al presionar el botón pedir un número. mostrar los numeros 
divisores desde el 1 al número ingresado, 
y mostrar la cantidad de numeros divisores encontrados. */
function mostrar()
{

	let numeroIngresado;
	let divisores;

	divisores=0;

	numeroIngresado=parseInt(prompt("ingrese un numero"))
	while(isNaN(numeroIngresado))
	{
		numeroIngresado=parseInt(prompt("Error, ingrese un numero valido"))
	}// fin de validacion
	

	for(let i=0;i<=numeroIngresado;i++)
	{
		if(numeroIngresado%i==0 )
		{
			divisores+=1;
			console.log(i)
		}
	
	}
	console.log("la cantidad dedivisores: "+divisores);


}//FIN DE LA FUNCIÓN