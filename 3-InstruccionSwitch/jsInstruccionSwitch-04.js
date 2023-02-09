//Nombre: Juan Pablo Etchart
function mostrar()
{
	//tomo el mes
	var mesDelAño =txtIdMes.value;
	let mensaje;


	switch(mesDelAño)
	{
		case "Febrero":
			mensaje=" tiene 28 dias";
			break;
		case "Abril":
		case "Junio":
		case "Septiembre":
		case "noviembre":
			mensaje="tiene 30 dias";
			break;
		default:
			mensaje="tiene 31 dias";
			break;
	}

	alert(mensaje);
	
	



}//FIN DE LA FUNCIÓN