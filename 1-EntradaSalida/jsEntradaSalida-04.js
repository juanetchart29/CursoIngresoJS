/* 
Nombre: Juan Pablo Etchart
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	let valor;

	valor=prompt("ingrese el valor");

	document.getElementById("txtIdNombre").value=valor;
}

