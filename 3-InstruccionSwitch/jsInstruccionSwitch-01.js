/*
NOMBRE: Juan Pablo Etchart
 al seleccionar un mes informar.
si es Enero: "que comiences bien el año!!!."
si es Marzo: "a clases!!!."
si es Julio: "se vienen las vacaciones!!!."
si es Diciembre: "Felices fiesta!!!." */
function mostrar()
{
	//tomo el mes
	var mesDelAño =txtIdMes.value;
	let mensaje;

	switch(mesDelAño){
		case "Marzo":
			mensaje="a clases";
			break;
		case "Enero":
			mensaje="que comiences bien el año!!";
			break;
		case "Julio":
			mensaje="se vienen las vacaciones";
			break;
		case "Diciembre":
			mensaje="felices fiestas";
			break;
		default:
			mensaje="sos aburrido";
			break;
	}
	alert(mensaje);

}//FIN DE LA FUNCIÓN