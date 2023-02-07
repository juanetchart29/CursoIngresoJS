//nombre: Juan Pablo Etchart
function mostrar()
{
	let estadoCivil;
	let edad;
	
	estadoCivil=document.getElementById("estadoCivil").value;
	edad=parseInt(document.getElementById("txtIdEdad").value);
	
	if(edad<18 && estadoCivil!="Soltero")
	{
		alert("Es muy pequeño para NO ser soltero");
	}
	


}//FIN DE LA FUNCIÓN