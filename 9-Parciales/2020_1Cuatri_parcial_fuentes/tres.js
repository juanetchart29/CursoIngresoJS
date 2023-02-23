/*
Nombre: Juan Pablo Etchart
En el ingreso a un viaje en avion nos solicitan nombre , edad, sexo("f" o "m") y estado civil("soltero", "casado" o "viudo")y temperatura corporal.
a) El nombre de la persona con mas temperatura.
b) Cuantos mayores de edad estan viudos
c) La cantidad de hombres que hay solteros o viudos.
d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
e) El promedio de edad entre los hombres solteros. */
function mostrar()
{
    let nombreIngresado;
    let edadIngresada;
    let sexoIngresado;
    let estadoCivilIngresado;
    let temperaturaIngresada;
    
    let continuo;
	
	let banderaMasTemperatura;
    let mayorTemperatura;
    let nombreMayorTemperatura;
	let contadorMayoresEdadViudos;
	let contadorVaronesSolterosOViudos;
	let contadorAncianosFiebre;
    let promedioHombreSoltero;
	let acumuladoreEdadHombreSoltero;
    let contadorHombresSolteros;

    contadorAncianosFiebre = 0;
    contadorMayoresEdadViudos = 0;
    contadorVaronesSolterosOViudos = 0;
    contadorHombresSolteros = 0;

	continuo = "s";
    banderaMasTemperatura = true;

	while(continuo == "s" || continuo == "S") 
	{
		nombreIngresado = prompt("Ingrese el Nombre");
		edadIngresada = parseInt(prompt("Ingrese la Edad"));
		nacionalidadIngresada = prompt("ingrese una nacionalidad")
		while(isNaN(edadIngresada) || edadIngresada>120 || edadIngresada<0)
		{
			edadIngresada = parseInt(prompt("Error, ingrese una edad valida"));
		}// termino while de validacion
		sexoIngresado = prompt("Ingrese el sexo, 'f'/'m' ");
		while(sexoIngresado!="f" && sexoIngresado!="F" && sexoIngresado!="m" && sexoIngresado!="M")
		{
			sexoIngresado = prompt("Ingrese un genero valido 'm'/'f'");
		}// termino validacion del sexo
	
		estadoCivilIngresado = prompt("ingrese estado civil, 'soltero', 'casado' o 'viudo'");
		while (estadoCivilIngresado!= "soltero" && estadoCivilIngresado!="casado" && estadoCivilIngresado!="viudo")
		{
			estadoCivilIngresado = prompt("ingrese estado civil valido, 'soltero', 'casado' o 'viudo'");   
		}
		temperaturaIngresada = parseFloat(prompt("ingrese a tempratura en grados centigrados"));
		while(isNaN(temperaturaIngresada) || temperaturaIngresada<32 || temperaturaIngresada>42)
		{
			temperaturaIngresada = parseInt(prompt("ingrese a tempratura valida"));
		}//termina validacion de temperatura
		
		switch(estadoCivilIngresado)
        {
            case "soltero":
                if(sexoIngresado == "m" || sexoIngresado == "M")
                {
                    contadorVaronesSolterosOViudos += 1;
                    acumuladoreEdadHombreSoltero += edadIngresada;
                    contadorHombresSolteros += 1;
                }
                break;
            case "viudo":
                if(edadIngresada >= 18)
                {
                    contadorMayoresEdadViudos += 1;
                }//punto B   
                if(sexoIngresado == "m" || sexoIngresado == "M")
                {
                    contadorVaronesSolterosOViudos += 1;
                }//punto C
                break;
        }//termino switch de estado civil

        if(banderaMasTemperatura)
        {
            mayorTemperatura = temperaturaIngresada ;
            nombreMayorTemperatura = nombreIngresado;
            banderaMasTemperatura = false;

        }else if(mayorTemperatura < temperaturaIngresada)
        {
            mayorTemperatura = temperaturaIngresada;
            nombreMayorTemperatura = nombreIngresado;
        }//termino punto A

        if(edadIngresada>= 60 && edadIngresada>= 38)
        {
            contadorAncianosFiebre += 1;
        }// termino punto D

		continuo = prompt("desea Ingresar otra persona  's'/'n'")
	}// termino el in greso de datos
    
    promedioHombreSoltero = acumuladoreEdadHombreSoltero / contadorHombresSolteros;

    document.write("el nombre de la persona con mas temperatura"+nombreMayorTemperatura+"con"+mayorTemperatura+"<br>");
    document.write("la cantidad de mayores de edad estan viudos"+contadorMayoresEdadViudos+"<br>");
    document.write("cantidad de hombres solteros o viudos"+contadorVaronesSolterosOViudos+"<br>");
    document.write("cantidad de personas de mas de 60 años, que tinen mas de 38 de temperatura: "+contadorAncianosFiebre+"<br>");
    document.write("el promedio de edad entre solteros"+promedioHombreSoltero+"<br>");


}
