//nombre: Juan Pablo Etchart
//manera 1
function mostrar()
{
	let edad;
	edad=parseInt(document.getElementById("txtIdEdad").value);
	if(edad<13 || edad>17){
	
		alert("la persona no es un adolescente");
	}
	 
		

}//FIN DE LA FUNCIÓN

//manera 2
/*
 function mostrar()
{
	let edad;
	edad=parseInt(document.getElementById("txtIdEdad").value);
	if(edad>=13 && edad<=17){
	}else{
		alert("la persona no es un adolescente");
	}
	 
		

} */
