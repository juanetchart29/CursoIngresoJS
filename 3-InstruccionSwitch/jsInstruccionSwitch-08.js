//NOMBRE=Juan Pablo Etchart
function mostrar()
{
	var destinoIngresado =txtIdDestino.value;
	let mensaje;

	switch(destinoIngresado)
	{
		case "Mar del plata":
			mensaje ="CALOR";
			break;
		case "Cataratas":
			mensaje="CALOR";
			break;
		case "Bariloche":
			mensaje="FRIO"
			break;
		case "Ushuaia"	:
			mensaje="FRIO"
			break;
	}
	alert(mensaje);

}//FIN DE LA FUNCIÓN