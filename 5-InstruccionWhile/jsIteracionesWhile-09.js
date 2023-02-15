/*
Nombre: Juan Pablo Etchart
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	// declarar variables
	let banderaDelPrimero;
	let numeroIngresado;
	let numeroMaximo;
	let numeroMinimo;
	let respuesta;
	//iniciar variables
	banderaDelPrimero=true;
	respuesta='si';

	while(respuesta=="si")
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
}//FIN DE LA FUNCIÓN