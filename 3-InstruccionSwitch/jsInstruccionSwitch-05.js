//Nombre: Juan Pablo Etchart
function mostrar()
{
	//tomo la hora
	var horaDelDia =txtIdHora.value;
	let mensaje;

	horaDelDia=parseInt(horaDelDia);// podria no parsear la variable y en switch escribir los numero con "" como str
	switch(horaDelDia)
	{
		case 7:
		case 8:
		case 9:
		case 10:
		case 11:
			mensaje="es de mañana";
			break;
		default:
			mensaje="no es de mañana";}
			break;
	}


	alert(mensaje);
	
}



//FIN DE LA FUNCIÓN