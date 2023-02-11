// nombre: Juan Pablo Etchart
function mostrar()
{
	var estacionIngresada;
	let destinoIngresado;
	let mensaje;

	estacionIngresada=document.getElementById("txtIdEstacion").value;
	destinoIngresado=document.getElementById("txtIdDestino").value;

	switch(estacionIngresada)
	{
		case "Invierno":
			switch(destinoIngresado){
				case "Bariloche":
					mensaje="se viaja";
					break;
				case "Cataratas":
				case "Cordoba":
				case "Mar del plata":
					mensaje="no se viaja";
					break;
			}
			break;
		case "Verano":
			switch(destinoIngresado)
			{
				case "Bariloche":
				case "Cordoba":
					mensaje="no se viaja";
					break;
				case "Cataratas":	
				case "Mar del plata":
					mensaje="se viaja";
					break;
			}
			break;
		case "Primavera":
			switch(destinoIngresado)
			{
				case "Bariloche":
					mensaje="no se viaja";
					break;
				case "Cordoba":
				case "Cataratas":	
				case "Mar del plata":
					mensaje="se viaja";
					break;
			
			}
			break;
		case "Otoño":
			mensaje="se viaja";
			break;
	}	
	alert(mensaje);
	
	
	
	
	
}//FIN DE LA FUNCIÓN