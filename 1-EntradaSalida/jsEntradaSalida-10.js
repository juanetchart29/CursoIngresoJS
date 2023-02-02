/*
Nombre: Juan PAblo Ethcart
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	let numIngresado;
	let resultado;
	let porcentajeAModificar;

	porcentajeAModificar=-25/100
	
	numIngresado=parseInt(document.getElementById("txtIdImporte").value);
	resultado=numIngresado+(numIngresado*porcentajeAModificar);

	document.getElementById("txtIdResultado").value= resultado;
 
}
