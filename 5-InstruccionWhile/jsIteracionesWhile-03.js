/*
Nombre:Juan Pablo Etchart
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
//validacion de tipo str

function mostrar()
{
	var claveIngresada;
	let claveDeseada;

	claveDeseada="utn750"
	claveIngresada = prompt("ingrese el número clave.");
	while(claveIngresada != claveDeseada){
		claveIngresada=prompt("Error: ingrese una clave correcta")
	}//fin del switch
}//FIN DE LA FUNCIÓN
