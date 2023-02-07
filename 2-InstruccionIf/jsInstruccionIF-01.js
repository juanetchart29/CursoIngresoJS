//nombre: Juan Pablo Etchart
function mostrar()
{
	//declaro variables
	let ingresoInt;
	let mensaje;

	//tomo la edad 
	ingresoInt=parseInt(document.getElementById("txtIdEdad").value);
	// if 
	if(ingresoInt==15)
	{
		//defino el mensaje 
		mensaje="niña bononita";
	}
	else
	{
		//defino el mensaje
		mensaje="la edad es distinta de 15";
	}
	//muestro el mensaje
	alert(mensaje);

}
//FIN DE LA FUNCIÓN
//anotaciones en clase 
/*
	if(condicion)//verdadero o falso (0) true -> verdadero false -> falso
	{
		codigo...;
	}else
	{
		codigo...;		
	}

	operadores aritmeticos:
	+ - * / %
	operadores relacionales o condicionales
	< > <= >= == !=
	operadores logicos
    condicionUno	&&  condicionDos            ||               !
				y          logica             o logica         negacion(se puede poner adelante de un argumento)
	*/