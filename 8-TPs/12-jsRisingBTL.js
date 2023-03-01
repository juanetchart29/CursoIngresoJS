/*RISING BTL. Empresa dedicada a la toma de datos para realizar 
estadísticas y censos nos pide realizar una carga de datos 
validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) 
y luego asignarla a cuadros de textos. 
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
	let edad;
	let sexo;
	let estadoCivil;
	let sueldo;
	let numLegajo;
	let nacionalidad;

	
	edad=parseInt(prompt("ingrese la edad"))
	while(isNaN(edad) || edad<18 || edad>90)
	{
		edad=parseInt(prompt("error,ingrese la edad"));
	}
	sexo=prompt("ingrese el sexo 'm'/'f'")
	while(sexo != "m" && sexo != "f")
	{
		sexo=prompt("error,ingrese el sexo 'm'/'f'");
	}
	estadoCivil=parseInt(prompt("ingrese el estado civil  1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos"));
	while(estadoCivil<1 || estadoCivil>4)
	{
		estadoCivil=parseInt(prompt(" error,ingrese el estado civil  1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos"));
	}
	sueldo= parseInt(prompt("ingrese el sueldo bruto"));
	while(isNaN(sueldo) || sueldo<8000)
	{
		sueldo= parseInt(prompt("error,ingrese el sueldo bruto"));
	}
	numLegajo=parseInt(prompt("ingrese le numero de legajo"));
	while (isNaN(numLegajo) || numLegajo<1000)
	{
		numLegajo=parseInt(prompt("error,ingrese le numero de legajo"));
	}
	nacional=prompt("ingrese la nacionalidad “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.");
	while(nacionalidad!="A" && nacionalidad!="E" && nacionalidad!="N")
	{
		nacional=prompt("error,ingrese la nacionalidad “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.");
	}
	switch(nacionalidad)
	{
		case "A":
			nacionalidad="Argentino"
			break;
		case "E":
			nacionalidad="extrangero/a"
			break;
		case "N":
			nacionalidad="nacionalizado/a"
			break;

	}
	switch (estadoCivil) {
		case 1:
			estadoCivil="soltero";
			break;
		case 2:
			estadoCivil="casado";
			break;
		case 3:
			estadoCivil="divorciado";
			break;
		case 4:
			estadoCivil="viudo";
			break;
	}
	document.getElementById("txtIdEdad").value=edad
	document.getElementById("txtIdSexo").value=sexo
	document.getElementById("txtIdSueldo").value=sueldo
	document.getElementById("txtIdNacionalidad").value=nacionalidad
	document.getElementById("txtIdEstadoCivil").value=estadoCivil
	document.getElementById("txtIdLegajo").value=numLegajo
	
}
