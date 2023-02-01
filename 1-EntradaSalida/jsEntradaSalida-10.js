/*
Nombre: Juan PAblo Ethcart
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	let num;
	let resultado;

	num=parseInt(document.getElementById("txtIdImporte").value);
	resultado=num-(num*0.25);

	document.getElementById("txtIdResultado").value= resultado;
 
}
