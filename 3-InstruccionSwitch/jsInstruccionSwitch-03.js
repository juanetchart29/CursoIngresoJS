// NOMBRE: Juan Pablo Etchart	
function mostrar()
{
	//tomo el mes
	var mesDelAño =txtIdMes.value;
	let mensaje;
	
	switch(mesDelAño)
	{		
		case "Febrero":
			mensaje="este mes no tiene mas de 29 dias";
			break;
		default:
			mensaje="este mes tiene 30 o mas dias";
			break;
	}
	alert(mensaje);
	
	


}//FIN DE LA FUNCIÓN