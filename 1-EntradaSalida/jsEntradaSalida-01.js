/*
Alumno: Juan Pablo Etchart
Al presionar el  botón, 
se debe mostrar un mensaje como el siguiente 
"Esto funciona de maravilla"
*/ 

/* function mostrar()
{
	alert("Esto funciona de maravilla");
}
 */
/* /******************************************************************************
 * Apellido:
 * Nombre:
 * Comisión:
 * Tutor:
 
Ejercicio 3

Una fabrica de muebles nos pide realizar una app para gestionar sus productos. 
El programa pide dar de alta cada venta realizada (Cada venta representa un mueble 
en particular, con los atributos definidos mas abajo).

Se debe ingresar en cada venta.
-Nombre del mueble
-Material del mueble (Madera, Metal y Vidrio)
-Peso
-Altura
-Anchura 
-Precio

Debido a la tala excesiva de árboles el gobierno pone un impuesto del 15% ante la compra de 
muebles de madera.
Los muebles de vidrio o metal tienen un 10% de descuento.

Se pide

a)Precio promedio por mueble vendido
b)CantidadHabitantescantidadHabitantes total de muebles de madera
c)El mueble de metal más alto 
d)El mueble más liviano
e)Porcentaje de muebles de cada tipo de material
f)Monto total recaudado bruto de todos los muebles (sin descuentos ni impuestos)
g)Monto total recaudado, pero solo de los muebles de madera(incluido descuentos e impuestos)

NOTA: Los precios no podran ser cero ni negativo.


****************************************************************************** 
function mostrar()
{
	let nombreMueble;
	let material;
	let peso;
	let altura;
	let anchura;
	let precio;
	
	let contadorVueltas=0;
	let acumladorTotal=0;
	let promedio;

	let contadorMadera=0;
	
	let banderaMetalMasAlto;
	let mayorAlturaMetal;
	let nombremayorAlturaMetal;

	let banderaMuebleMasLiviano;
	let menorPeso;
	let nombreMenorPeso;

	let porcentajeMadera;
	let porcentajeMetal;
	let porcentajeVidrio;
	let contadorMetal;
	let contadorVidrio;
	
	let acumuladorTotal;
	let impuesto;
	let acumuladorMadera;

	let sigue="s";

	while(sigue="s")
	{
		//-----------------inputs
		// ----------------logica
		// ----------------sigue y validaciones
	}



}
/*Realizar el algoritmo que permita ingresar 5 paises:
del continente (validar entre america , asia , europa y africa)
el nombre del país,
cantidad de habitantes en millones entre 1 y 2000 (validar)
la temperaruta promedio que se registra en su territorio(entre -50 y 50)
Se debe Informar al usuario lo siguiente:
a)La cantidad de temperaturas pares.
b)El nombre del pais con menos habitantes
c)la cantidad de paises de america que tienen menos de 0 grados .
d)el promedio de habitantes entre los paises ingresados .
e) la temperatura mínima ingresada, y nombre del pais que registro esa temperatura.


function mostrar()
{
	let continente;
	let nombre;
	let cantidadHabitantes;
	let temperatura;
	
	let contadorTemperaturaPar=0;
	
	let banderaPaisMenosHabitantes=true;
	let menorCantidadHabitantes;
	let nombreMenorCantidadHabitantes;

	let contadorPaisesMenosCero=0;

	let acumuladorTotalHabitantes=0;
	let contadorVueltas=0;
	let promedioCantidadHAbitantes;

	let banderaMenorTemperatura=true;
	let nombrePaisMenorTemperatura;
	let menorTemperatura;

	let sigue="s";

	while(sigue == "s")
	{
		//----------------------------ingreso y validacion
		continente=prompt("ingrese el contintente: america , asia , europa y africa ")
		while(continente!="america" && continente!="asia" && continente!="europa" && continente!="africa")
		{
			continente=prompt("error, ingrese un contintente: america , asia , europa y africa  valido")
		}//fin validacion

		nombre=prompt("ingrese el nombre");
		while(!isNaN(parseInt(nombre)))
		{
			nombre=prompt("error,ingrese un nombre  valido");

		}

		cantidadHabitantes=parseInt(prompt("ingrese la cantidadHabitantes en millones"))
		while(isNaN(cantidadHabitantes) || cantidadHabitantes<0 || cantidadHabitantes>2000)
		{
			cantidadHabitantes=parseInt(prompt("error, ingrese una cantidadHabitantes valida"))
		}

		temperatura=parseInt(prompt("ingrese la temperatura en millones"))
		while(isNaN(temperatura) || temperatura<-50 || temperatura>50)
		{
			temperatura=parseInt(prompt("error, ingrese una temperatura valida"))
		}
		
		//---------------------logica
		if(temperatura%2==0)
		{
			contadorTemperaturaPar+=1;
		}	
// E
		if(banderaMenorTemperatura)
		{
			menorTemperatura=cantidadHabitantes;
			nombrePaisMenorTemperatura=nombre;
			banderaMenorTemperatura=false;
		} else if(menorTemperatura>cantidadHabitantes)
		{
			menorTemperatura=cantidadHabitantes;
			nombrePaisMenorTemperatura=nombre;
		}
// B
		if(banderaPaisMenosHabitantes)
		{
			menorCantidadHabitantes=cantidadHabitantes;
			nombreMenorCantidadHabitantes=nombre;
			banderaPaisMenosHabitantes=false;
		}else if (menorCantidadHabitantes>cantidadHabitantes)
		{
			menorCantidadHabitantes=cantidadHabitantes;
			nombreMenorCantidadHabitantes=nombre;
		}
//c
		switch(continente)
		{
			case "africa":
			case "america":
				if (temperatura<0)
				{
					contadorPaisesMenosCero+=1;
				}
				break;
			case "asia":
			case "europa":
		}

		//----------------------sigue, contadores y acumuladores
		sigue=prompt("desea seguir ingresando poductos? s/n");
		acumuladorTotalHabitantes+=cantidadHabitantes;
		contadorVueltas+=1;

	}//fin del while
	promedioCantidadHAbitantes=acumuladorTotalHabitantes/contadorVueltas;
	document.write("la cantidad de pasises con temperatura par:"+contadorTemperaturaPar+"<br>");
	document.write("el nombre del pais con menos habitantes"+nombrePaisMenorTemperatura+"<br>");
	document.write("la cantidad de paises de america que tienen menos de 0 grados:"+contadorPaisesMenosCero+"<br>");
	document.write("l promedio de habitantes entre los paises ingresados"+promedioCantidadHAbitantes+"<br>");
	document.write("la temperatura mínima ingresada, y nombre del pais que registro esa temperatura"+menorTemperatura+nombrePaisMenorTemperatura+"<br>");
}*/
/*El alumno deberá ingresar:
Nombre del alumno
Carrera (Programación, Psicología, Diseño gráfico)
Estado de la carrera: en curso-abandono-finalizado
genero (femenino-masculino-nobinario)
Nota (entre 1 y 10)
Se desconoce la cantidad de alumnos que se ingresaran.
Informar:
A. Cantidad total de alumnos de cada carrera.
B. Cantidad total de mujeres que cursan la carrera de programación
C. Cantidad de alumnos no binarios.
D. Promedio de notas de los alumnos finalizantes.
E. Nombre  del mejor alumno no binario en la carrera de psicología.
F. ¿Cuál es la carrera que tiene más alumnos?
function mostrar()
{

	let nombre;
	let carrera;
	let estadoCarrera;
	let sexo;
	let nota;

	let sigue="s";

	let contadorProgramacion=0;
	let contadorPsicologia=0;
	let contadorDiseño=0;

	let contadorMujeres=0;

	let contadorNoBinario=0;

	let promedioNotasFinalizantes;
	let acumuladorNotasFinalizantes=0;
	let contadorNotasFinalizantes=0;

	let banderaMejorNotaNoBinario=true;
	let mejorNotaNoBinario;
	let nombreMejorNotaNoBinario;

	let comparadorAlumnos=0;
	let carreraMasAlumnos;

	while(sigue == "s")
	{
		//----------------------------ingreso y validacion
		nombre=prompt("ingrese el nombre");
        while(!isNaN(parseInt(nombre)))
        {
            nombre=prompt("error,ingrese un nombre valido");
        }

		carrera=prompt("ingrese una carrera: programacion, psicologia o diesño")
        while(carrera!="programacion" && carrera!="psicologia" && carrera!="diesño")
        {
            carrera=prompt("error, ingrese una carrera valida:programacion, psicologia o diesño")
        }//fin validacion
	
		estadoCarrera=prompt("ingrese: curso-abandono-finalizado")
        while(estadoCarrera!="curso" && estadoCarrera!="abandono" && estadoCarrera!="finalizado")
        {
            estadoCarrera=prompt("error, ingrese valido")
        }//fin validacion

		sexo=prompt("ingrese un sexo: 'f'/'m'/ 'nb'")
        while(sexo != "f" &&  sexo != "m" && sexo != "nb")
        {
            sexo=prompt("error,ingrese un sexo valido: 'f'/'m'")
        }//termina while

		nota=parseInt(prompt("ingrese la nota"))
		while(isNaN(nota) || nota<0 || nota>10)
		{
			nota=parseInt(prompt("error, ingrese una nota valida"))
		}
		//---------------------logica
//A		//b	
		switch(carrera)
		{
			case "diseño":
				contadorDiseño+=1;
				break;
			case "programacion":
				contadorProgramacion+=1;
				if (sexo=="f")
				{
					contadorMujeres+=1;
				}
				break;
			case "psicologia":	

				contadorPsicologia+=1;
		//E
				if(sexo=="nb"&& banderaMejorNotaNoBinario)
				{
					mejorNotaNoBinario=nota;
					nombreMejorNotaNoBinario=nombre;
					banderaMejorNotaNoBinario=false;
				}else if(sexo=="nb" && mejorNotaNoBinario<nota)
				{
					mejorNotaNoBinario=nota;
					nombreMejorNotaNoBinario=nombre;
				}
				break
		}// fin del switch
//c
		if(sexo=="nb")
		{
			contadorNoBinario+=1;
		}
// D
		if(estadoCarrera=="finalizado")
		{
			acumuladorNotasFinalizantes+=nota;
			contadorNotasFinalizantes+=1;
		}
 

		/* if(contadorDiseño>comparadorAlumnos)//2 y 2
		{
			carreraMasAlumnos=carrera;
			comparadorAlumnos=contadorDiseño;

		}else if(contadorProgramacion>comparadorAlumnos)// 1; 2
		{
			carreraMasAlumnos=carrera;
			comparadorAlumnos=contadorProgramacion;
		}else if(contadorPsicologia>comparadorAlumnos)//1; 2
		{
			carreraMasAlumnos=carrera;
			comparadorAlumnos=contadorPsicologia;
		}
		 


		//----------------------sigue y contadores y acumuladores
		sigue=prompt("desea seguir ingresando poductos? s/n");

	}
	//fin del while

	if(contadorDiseño>contadorProgramacion && contadorDiseño>contadorPsicologia)
	{

	}else if(contadorProgramacion>contadorPsicologia)
	{

	}else 
	{

	}


	promedioNotasFinalizantes = acumuladorNotasFinalizantes / contadorNotasFinalizantes;

	document.write("la cantidad total de alumnos en programacion"+contadorProgramacion+"<br>");
	document.write("la cantidad total de alumnos en psicologia"+contadorPsicologia+"<br>");
	document.write("la cantidad total de alumnos en diseño"+contadorDiseño+"<br>");
	document.write("cantidad total de mujeres que cursan programacion"+contadorMujeres+"<br>");
	document.write("cantida de alumnos no binarios"+contadorNoBinario+"<br>");
	document.write("promedio de notas de los alumnos finalizantes"+promedioNotasFinalizantes+"<br>");
	document.write("nombre del mejor alumno no binario en la carrear de psicologia"+mejorNotaNoBinario+"<br>");
	document.write("carrera que tiene mas alumnos"+carreraMasAlumnos+"<br>");




}//fin de mi funcino
*/

/*3. De los 10 empleados de una PYME se ingresan los siguientes datos:
Nombre y apellido
Genero del empleado ("Femenino", "Masculino", "No Binario")
Cantidad de hijos (no puede ser un numero negativo)
El programa debera mostrar:
a. Porcentaje de empleados por cada genero.
b. El nombre del empleado No Binario con mas cantidad de hijos.
c. Nombre y apellido del primer empleado que no tiene hijos.*/
 function mostrar()
 {
	let nombre;
	let apellido;
	let sexo;
	let cantidad;

	let contadorF=0;
	let contadorM=0;
	let contadoNb=0;
	let porcentajeF;
	let porcentajeM;
	let porcentajeNb;

	let vueltas=0;

	let banderaMayorCantidadHijosNb=true;;
	let mayorCantidadHijosNb;
	let nombremayorCantidadHijosNb;

	let banderaNoHijos=true;
	let nombreNoHijos;
	let apellidoNoHijos;


	for(let i=0;i<10;i++)
	{
    	//----------------------------ingreso y validacion
		nombre=prompt("ingrese el nombre");
        while(!isNaN(parseInt(nombre)))
        {
        	nombre=prompt("error,ingrese un nombre  valido");
        }


		apellido=prompt("ingrese el apellido");
        while(!isNaN(parseInt(apellido)))
        {
        	apellido=prompt("error,ingrese un apellido  valido");
        }

		sexo=prompt("ingrese un sexo: 'f'/'m'")
        while(sexo != "f" &&  sexo != "m" && sexo != "nb")
        {
            sexo=prompt("error,ingrese un sexo valido: 'f'/'m'")
        }//termina while

		cantidad=parseInt(prompt("ingrese la cantidad de hijos"))
        while(isNaN(cantidad) || cantidad<0)
        {
            cantidad=parseInt(prompt("error, ingrese una cantidad de hijos valida"))
        }

   		//---------------------logica
//B
		switch(sexo)
		{
			case "nb":
				if(banderaMayorCantidadHijosNb)
				{
					mayorCantidadHijosNb=cantidad;
					nombremayorCantidadHijosNb=nombre;
					banderaMayorCantidadHijosNb=false;
				}else if (mayorCantidadHijosNb<cantidad)
				{
					mayorCantidadHijosNb=cantidad;
					nombremayorCantidadHijosNb=nombre;
				}
				contadoNb+=1;
				break;
			case "f":
				contadorF+=1;
				break;
			case "m":
				contadorM+=1;
				break;
		}
		if(banderaNoHijos)
		{
			nombreNoHijos=nombre;
			apellidoNoHijos=apellido;
			banderaNoHijos=false;
		}



		
    	//---------------------- y contadores y acumuladores
	}// fin del for
	porcentajeF=vueltas/contadorF;
	porcentajeM=vueltas/contadorM;
	porcentajeNb=vueltas/contadoNb;

	document.write("el porcentaje de F"+porcentajeF+"<br>");
	document.write("el porcentaje de M"+porcentajeM+"<br>");
	document.write("el porentaje de Nb"+porcentajeNb+"<br>");
	document.write("el nombre del empleado Nb con mas cantidad de hijos:"+nombremayorCantidadHijosNb+"<br>");
	document.write("Nombre y apellido del primer empleado que no tiene hijos."+nombreNoHijos+apellidoNoHijos+"<br>");
 }
