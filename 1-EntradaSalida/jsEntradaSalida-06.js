/*
Nombre: Juan Pablo Etchart
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
    let numeroUnoTexto;
	let numeroDosTexto;
	let numeroUno;
	let numeroDos;
	let mensaje;

	numeroUnoTexto=document.getElementById("txtIdNumeroUno").value;
	numeroDosTexto=document.getElementById("txtIdNumeroDos").value;

	numeroUno=parseInt(numeroUnoTexto);
	numeroDos=parseInt(numeroDosTexto);
	mensaje="el resultado es " + (numeroUno + numeroDos);
	alert(mensaje);
}
