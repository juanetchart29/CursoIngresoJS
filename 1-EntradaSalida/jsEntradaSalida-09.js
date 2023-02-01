/*
Nombre: Juan Pablo Etchart
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	let num;
	let resultado;

	num=parseInt(document.getElementById("txtIdSueldo").value);
	resultado=num*(1.1);

	document.getElementById("txtIdResultado").value= resultado;
 
}
