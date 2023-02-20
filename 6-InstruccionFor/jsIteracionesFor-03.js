//Nombre:Juan Pablo Etchat
function mostrar()
{
	let vueltas;
	let mensaje;
//mensaje
	mensaje="Hola UTN FRA"
//pido la cantidad de vueltas
	vueltas=parseInt(prompt("ingrese la cantidad de veces que quiere que se repita el mensaje"));
	while(isNaN(vueltas))
	{
		vueltas=parseInt(prompt("error, ingresar un numero valido"));
	}//fin de validacion de vueltas
	
	for(let i=0;i<vueltas;i++)
	{
		alert(mensaje)
	}//fin del for
}//FIN DE LA FUNCIÓN