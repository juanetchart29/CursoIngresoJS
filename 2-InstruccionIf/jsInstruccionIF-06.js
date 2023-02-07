//nombre: Juan Pablo Etchart

//SIN USAR ELSE IF 
/* function mostrar()
{
	//tomo la edad  
	let edad;
	let mensaje;
	edad=parseInt(document.getElementById("txtIdEdad").value);
	if( edad <18){
		if(edad>=13){
			mensaje="La Persona es adolescente";
		}else {
			mensaje="la persona es un niño";
		}
		
	}else{
		mensaje="la persona es mayor de edad";
	}
	alert(mensaje);

}
*/
//FIN DE LA FUNCIÓN


// USANDO ELSE IF
function mostrar()
{
	//tomo la edad  
	let edad;
	let mensaje;
	edad=parseInt(document.getElementById("txtIdEdad").value);
	if (edad>=18){
		mensaje="la persona es mayor de edad";
	}else if (edad>=13){
		mensaje="la persona es un adolescente";
	}else {
		mensaje="la persona es niño";
	}
	alert(mensaje);



}//FIN DE LA FUNCIÓN