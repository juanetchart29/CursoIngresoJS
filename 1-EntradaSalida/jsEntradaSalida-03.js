/*
nombre:Juan Pablo Etchart
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	let nombreIngresado;

	nombreIngresado=document.getElementById("txtIdNombre").value;

	alert(nombreIngresado);

}

/*
Nombre: Juan Pablo Etchart
Ejercicio 3.bis: Ingresar descripción (por prompt)
 y precio de un producto (por id).
El programa deberá mostrar por alert
 la descripción del producto 
junto al precio aumentado en un 30%. 
Pueden utilizar el html del ejercicio 3 para resolverlo
*/

function mostrar(){
	let descripcion;
	let precio;
	let precio30;

	descripcion=prompt("ingrese la descripcion del producto ");
	precio=parseInt(document.getElementById("txtIdNombre").value);
	precio30= precio*(1.3);
	alert("el precio de "+descripcion+" es: "+precio30);
}
