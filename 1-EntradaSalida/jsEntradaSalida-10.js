/*
Nombre: Juan PAblo Ethcart
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"
*/
/*
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
*/

//-----------------------------------------------

/* Ejercicio 10.bis: Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
pedirle al usuario un % de descuento y mostrar el importe en el cuadro de texto "RESULTADO" */
function mostrarAumento()
{
	let numIngresado;
	let porcentaje;
	let resultado;

	numIngresado=parseInt(document.getElementById("txtIdImporte").value);
	porcentaje=parseInt(prompt("ingrese el porcentaje deseado"));
	
	resultado=numIngresado+porcentaje/100*numIngresado

	document.getElementById("txtIdResultado").value=resultado
}