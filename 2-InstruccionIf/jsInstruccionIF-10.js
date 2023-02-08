//nombre: Juan Pablo Etchart
function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	let numRandom;
	let mensaje;

	numRandom=Math.floor(Math.random()*10+1);

	if (numRandom>=9)
	{
		mensaje=" EXCELENTE";

	}else if( numRandom>=4)
	{
		mensaje=" APROBO";

	}else
	{
		mensaje=" Vamos, la proxima se puede";
	}
	alert("la nota es: "+numRandom+mensaje)
}//FIN DE LA FUNCIÓN