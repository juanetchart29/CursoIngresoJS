//Nmbre:; Juan Pablo Etchart
/* function mostrar()
{
	let numero;

	for(let i=0;i=1;)
	{
		numero=parseInt(prompt("ingrese un numero"))
		while(isNaN(numero))
		{
			numero=parseInt(prompt("Error, ingrese un numero valido"))
		}// fin de validacion

		if(numero==9)
		{
			break;
		}
		
	}
}//FIN DE LA FUNCIÓN */

//ejercicio5 bis-------
/* For 5 bis, Realizar el programa que permita el ingreso de las notas (validar entre 0 y 10) , 
el sexo (validar el sexo “f” o “m” o "b") de 7 alumnos, informar por console.log: 
a) El promedio de las notas totales. 
b) La nota más baja y el sexo de esa persona. 
c) La cantidad de varones que su nota haya sido mayor o igual a 6.
d) La cantidad de alumnos desaprobados (nota < 4) */
function mostrar()
{
	let nota;
	let sexo;
	let promedio;
	let acumulador;
	let flagMenor;
	let notaMenor;
	let sexoMenor;
	let varonesAprobados;
	let contadorDesaprobados;

	flagMenor=true;
	acumulador=0;
	contadorDesaprobados=0;
	varonesAprobados=0;

	for(let i=0;i<7;i++)
	{
		nota=parseInt(prompt("ingrese una nota"));
		while(isNaN(nota)|| nota<0 || nota>10)
		{
			nota=parseInt(prompt("error,ingrese una nota valida"));
		}
		sexo=prompt("ingrese genero f/m")
		while(sexo!="m" && sexo!="M" && sexo!="f" && sexo!="F")
		{
			sexo=prompt("eror,ingrese genero valido")
		}
		acumulador+=nota
		if(flagMenor==true)
		{
			notaMenor=nota;
			sexoMenor=sexo;
			flagMenor=false;
		}
		else if(notaMenor>nota)
		{
			notaMenor=nota;
			sexoMenor=sexo;
		}
		if( nota<6)
		{
			contadorDesaprobados+=1
		}else if(sexo=="M"||sexo=="m")
		{
			varonesAprobados+=1;
		}



	}
	promedio=acumulador/7
	document.write("promedio: "+promedio);
	document.write("desaprobados: "+contadorDesaprobados);
	document.write("la nota mas baja es: "+notaMenor+"y el sexo es: "+sexoMenor);
	document.write("la cantidad de varones aprobados es: "+varonesAprobados);

}