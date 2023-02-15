/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	var numeroIngresado;

	numeroIngresado = parseInt(prompt("ingrese un número entre 0 y 9."));
	
	while(isNaN(numeroIngresado)||numeroIngresado<0 || numeroIngresado>9){
		numeroIngresado=parseInt(prompt("Error: Ingrese un numero valido"))
	}//fin del while
}//FIN DE LA FUNCIÓN