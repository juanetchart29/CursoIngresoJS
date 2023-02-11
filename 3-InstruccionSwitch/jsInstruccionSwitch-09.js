// Nombre= Juan Pablo Etchart	
function mostrar()
{
	var estacionIngresada;
	let destinoIngresado;
	let porcentaje;
	let mensaje;
	let precio;

	precio=15000;
	porcentaje=0;

	estacionIngresada=document.getElementById("txtIdEstacion").value;
	destinoIngresado=document.getElementById("txtIdDestino").value;

	switch(estacionIngresada)
	{
		case "Invierno":
			switch(destinoIngresado){
				case "Bariloche":
					porcentaje=20;
					break;
				case "Cataratas":
				case "Cordoba":
					porcentaje=-10;
					break;
				case "Mar del plata":
					porcentaje=-20;
					break;
			}
			break;
		case "Verano":
			switch(destinoIngresado)
			{
				case "Bariloche":
					porcentaje=-20;
					break;
				case "Cataratas":
				case "Cordoba":
					porcentaje=10
					break;
				case "Mar del plata":
					porcentaje=20;
					break;
			}
			break;
		default:
			switch(destinoIngresado)
			{
				case "Cordoba":
					porcentaje=0;
					break;
				default:
					porcentaje=10;
					break;
			
			}
			break;
	}
	precio=precio+precio*porcentaje/100
	mensaje="el precio es:  $"+precio;
	alert(mensaje);
}//FIN DE LA FUNCIÓN