// nombre: Juan Pablo Etchart
function mostrar()
{
	//tomo el mes
	var mesDelAño =txtIdMes.value;
	let mensaje;
	switch(mesDelAño)
	{		
		case "Abril":
		case "Mayo":
			mensaje="falta poco para el invierno";
			break;
		case "Junio":
		case "Julio":
		case "Agosto":
		case "Septiembre":
			mensaje="Abreigate que hace frio";
			break;
		default:
			mensaje="Ya pasamos el frio, ahora calor!!!.";
			break;
	}
	alert(mensaje);




}//FIN DE LA FUNCIÓN