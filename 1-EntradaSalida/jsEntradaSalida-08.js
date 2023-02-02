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



/* Ejercicio 8.bis: Ingresar dos numeros por id
Se pide:
mostrar por alert:
a) La suma de los dos numeros
b) El promedio de los numeros
c) El modulo de los numeros (el primero en modulo del segundo)
 */function SacarResto(){
	let n1;
	let n2;
	let suma;
	let promedio;
	let moduloN1;
	let moduloN2;


	n1=parseInt(document.getElementById("txtIdNumeroDividendo").value);
	n2=parseInt(document.getElementById("txtIdNumeroDivisor").value);
	suma=n1+n2;
	promedio= suma/2;
	moduloN1=|n1|
	mod





}