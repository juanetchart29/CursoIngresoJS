/*
nombre: Juan Pablo Etchart
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."


function SacarResto()
{
	let dividendo;
	let divisor;
	let resto;

	dividendo=parseInt(document.getElementById("txtIdNumeroDividendo").value);
	divisor=parseInt(document.getElementById("txtIdNumeroDivisor").value);
	
	resto=(dividendo%divisor);

	alert(resto);
}*/

//------------------------------------------------

/* Ejercicio 8.bis: Ingresar dos numeros por id
Se pide:
mostrar por alert:
a) La suma de los dos numeros
b) El promedio de los numeros
c) El modulo de los numeros (el primero en modulo del segundo)
 

*/function SacarResto()
 {
	let nUno;
	let nDos;
	let suma;
	let promedio;
	let resto;


	nUno=parseInt(document.getElementById("txtIdNumeroDividendo").value);
	nDos=parseInt(document.getElementById("txtIdNumeroDivisor").value);
	
	suma=nUno+nDos;
	promedio= suma/2;
	resto=nUno%nDos;
	
	console.log("la suma es: " +suma);
	console.log("el promedio es: "+promedio);
	console.log("el resto es: "+resto);
	
	alert("la suma es: " +suma);
	alert("el promedio es: "+promedio);
	alert("el resto es: "+resto);
}