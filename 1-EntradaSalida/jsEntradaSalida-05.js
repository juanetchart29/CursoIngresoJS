/*
Nombre:Juan Pablo Etchart 
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
/*function mostrar()
 {	
	let nombre;
	let edad;
	let mensaje;

	nombre=document.getElementById("txtIdNombre").value;
	edad=document.getElementById("txtIdEdad").value;
	mensaje= "el nombre es = "+(nombre)+" y tiene "+(edad)+" años";

	alert(mensaje);
} */
// Ejercicio 5.bis: 
/* se debe mostrar un mensaje :
 "Perez , usted se llama jose y tiene 66 años"
se debe optener el apellido , de la manera que puedan */
function mostrar()
{	
	let nombre;
	let edad;
	let mensaje;
	let apellido;

	nombre=document.getElementById("txtIdNombre").value;
	edad=document.getElementById("txtIdEdad").value;
	apellido=prompt("ingrese su apellido: ")

	mensaje= apellido+" el nombre es: "+(nombre)+" y tiene "+(edad)+" años";

	alert(mensaje);
}