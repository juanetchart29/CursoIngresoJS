//Nombre: Juan Pablo Etchart
function mostrar()
{
	//tomo la hora
	var horaDelDia =txtIdHora.value;
	let mensaje;

	horaDelDia=parseInt(horaDelDia);
	
	switch(horaDelDia)
	{
		case 7:
		case 8:
		case 9:
		case 10:
		case 11:
			mensaje="es de mañana";
			break;
		case 12:
		case 13:
		case 14:
		case 15:
		case 16:
		case 17:
		case 18:
		case 19:
			mensaje="es de tarde";
			break;
		default:
			if(horaDelDia>24 || horaDelDia<0)
			{
				mensaje="la hora no es valida";
			}else
			{
				mensaje="es de noche";
			}
			break;
		
	}
	alert(mensaje);

}//FIN DE LA FUNCIÓN