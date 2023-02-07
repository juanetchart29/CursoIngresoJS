//nombre: Juan Pablo Etchart
function mostrar()
{
	//tomo la edad  
	let edad;
	let mensaje;

	edad=parseInt(document.getElementById("txtIdEdad").value);

	if(edad>=18)
	{
		mensaje="La Persona es Mayor de Edad";
	}
	else
	{
		mensaje="La Persona es Menor de Edad";
	}

	alert(mensaje);


}//FIN DE LA FUNCIÓN