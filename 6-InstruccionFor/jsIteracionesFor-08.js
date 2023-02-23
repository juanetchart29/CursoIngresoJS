/* 
Nombre: Juan Pablo Etchart
 al presionar el botón pedir un número.
 Informar si el numero es PRIMO o no. */
function mostrar() {


	let numeroIngresado;
	let esPrimo;

	esPrimo = true;
	numeroIngresado = parseInt(prompt("Ingrese un número: "));
	while (isNaN(numeroIngresado)) {
		numeroIngresado = parseInt(prompt("ERROR : ingresa un numero"));
	}
	if(numeroIngresado==0 || numeroIngresado==1)
	{
		esPrimo=false;
	}
	else
	{
		for (let i = 2; i <= numeroIngresado / 2; i++) 
			{
				if (numeroIngresado % i === 0) 
				{
					esPrimo = false;
					break;
				}
			}

	}
	
	if (esPrimo == true) {
		alert("es primo");
	} else {
		alert("no es primo");
	}

}//FIN DE LA FUNCIÓN