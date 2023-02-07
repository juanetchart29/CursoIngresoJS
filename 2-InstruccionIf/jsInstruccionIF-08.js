//nombre: Juan Pablo Etchart
function mostrar()
{
	//tomo la edad  
	let estadoCivil;
	let edad;
	
	estadoCivil=document.getElementById("estadoCivil").value;
	edad=parseInt(document.getElementById("txtIdEdad").value);
	
	if(edad>=18 && estadoCivil=="Soltero")
	{
		alert("Es soltero y no es menor")
	}
	
}//FIN DE LA FUNCIÓN