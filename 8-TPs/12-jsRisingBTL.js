/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
 	//definicion de variables
 	let edadIngresada;
 	let sexoIngresado;
 	let estadoCivilIngresado;
	let sueldoBruto;
	let legajo;
	let nacionalidad;

	edadIngresada=parseInt(prompt("ingrese una edad valida(18-90)"));
	while(isNaN(edadIngresada) || edadIngresada<18 || edadIngresada>90)// or while (!(edadIngresada>=18 || edadIngresada<=90))
	{
		edadIngresada=parseInt(prompt("Error,ingrese una edad valida"))
	}//fin de validaccion edad
	sexoIngresado=prompt("Ingrese un genero M/F");
	while(sexoIngresado=="m"||sexoIngresado=="M"||sexoIngresado=="f"||sexoIngresado=="F")
	{
		sexoIngresado=prompt("ingrese un genero valido");
	}//fin de validacion sexo
	estadoCivilIngresado=parseInt(prompt("Ingrese un estado civil"+"<br>"+"-para soltero, 2-para casados, 3-para divorciados y 4-para viudos"))
	while (isNaN(estadocivilIngresado) ||(estadoCivilIngresado!=1 && estadoCivilIngresado!=2 && estadoCivilIngresado!=3 && estadoCivilIngresado!=4))
	{
		estadoCivilIngresado=parseInt(prompt("Error, ingresar un numero valido"))
	}// fin de validacion estado civil
	switch(estadoCivilIngresado)
	{
		case 1:
			estadoCivilIngresado="soltero";
			break;
		case 2:
			estadoCivilIngresado="casados";
			break;
		case 3:
			estadoCivilIngresado="divorciados";
			break;
		case 4:
			estadoCivilIngresado="viudos";
			break;
	}
	sueldoBruto=parseInt(prompt("ingrese un sueldo bruto(no menor a 8000)"));
	while(isNaN(sueldoBruto) || (sueldoBruto<8000))
	{
		sueldoBruto=parseInt(prompt("Error, ingresar un numero valido"));
	}//fin de validacion sueldo bruto
	legajo=parseInt(prompt("ingrese un numero de legajo valido(4 cifras)"));
	while()






	document.getElementById("txtIdEdad").value=edadIngresada;
	document.getElementById("txtIdSexo").value=
	document.getElementById("txtIdEstadoCivil").value=
	document.getElementById("txtIdSueldo").value=
	document.getElementById("txtIdLegajo").value=
	document.getElementById("txtIdNacionalidad").value=

}
