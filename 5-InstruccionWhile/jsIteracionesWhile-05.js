/*
Nombre: Juan Pablo Etchart
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	var sexoIngresado;

	sexoIngresado = prompt("ingrese f ó m .");
	
	while(sexoIngresado!="f" && sexoIngresado!="F" && sexoIngresado!="m" && sexoIngresado!="M"){
		sexoIngresado=prompt("Error: ingrese un genero valido");
	}
	txtIdSexo.value=sexoIngresado;
}