//Nombre: Juan Pablo Etchart	
function mostrar()
{
	var destinoIngresado =txtIdDestino.value;
	let mensaje;

	switch(destinoIngresado)
	{
		case "Mar del plata":
			mensaje ="Se encuentra al Este";
			break;
		case "Cataratas":
			mensaje="se encuentra al Norte";
			break;
		case "Bariloche":
			mensaje="Se encuentra al oeste"
			break;
		case "Ushuaia"	:
			mensaje="Se encuentra al Sur"
			break;
	}
	alert(mensaje);

}//FIN DE LA FUNCIÓN