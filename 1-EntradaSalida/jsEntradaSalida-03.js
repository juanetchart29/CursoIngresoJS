/*
nombre:Juan Pablo Etchart
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
/* function mostrar()
{
	let nombreIngresado;

	nombreIngresado=document.getElementById("txtIdNombre").value;

	alert(nombreIngresado);

}
 */
/*
Nombre: Juan Pablo Etchart
Ejercicio 3.bis: Ingresar descripción (por prompt)
 y precio de un producto (por id).
El programa deberá mostrar por alert
 la descripción del producto 
junto al precio aumentado en un 30%. 
Pueden utilizar el html del ejercicio 3 para resolverlo
*/

/* function mostrar(){
	let descripcion;
	let precio;
	let precio30;

	descripcion=prompt("ingrese la descripcion del producto ");
	precio=parseInt(document.getElementById("txtIdNombre").value);
	precio30= precio*(1.3);
	alert("el precio de "+descripcion+" es: "+precio30);
} */





/* 
Nombre:Juan Pablo Etchart
Reclutando IT" Un recruiter nos acumrató para armale 
un programa para el ingreso indeterminado de candidatos. 
Se solicitan los siguientes datos:   
nombre,
edad,   
sexo(feminino, masculino, no binario)
lenguaje( “Python”, “C#” o “Javascript”),
donde aprendó a programar(“universitario”,”terciario”,“curso”). 
LAS VALIDACIONES SON A CRITERIO DEL PROGRAMADOR
Informar:
a)El promedio de edad de los que estudian Python.
b)La cantidad de mujeres que estudian C#
c)El promedio de personas que aprendieron a programar en la Universidad.
*/ 
/* function mostrar()
{
	let nombre;
	let edad;
	let sexo;
	let lenguaje;
	let dondeEstudio;
	
	let acumEdadPy=0;
	let contPy=0;
	let promedioPy;
	
	let contMujeresC=0;

	let contadorUniversidad=0;
	let promedioUniversitario;
	let contadorTotal=0;

	let sigue="s";
    while(sigue == "s")
    {
        //----------------------------ingreso y validacion
		nombre=prompt("ingrese el nombre");
		while(!isNaN(parseInt(nombre)))
		{
			nombre=prompt("error,ingrese un nombre  valido");

		}
		edad=parseInt(prompt("ingrese una edad"));
        while(isNaN(edad) || edad < 15 || edad > 123)
        {
            edad=parseInt(prompt("Error,ingrese una edad valida"));
        }//fin del while

		sexo=prompt("ingrese un sexo: 'f'(femenino)/'m'(masculino)/'nb'(no binario)")
        while(sexo != "f" &&  sexo != "m" && sexo != "nb")
        {
            sexo=prompt("error,ingrese un sexo: 'f'(femenino)/'m'(masculino)/'nb'(no binario)")
        }//termina while

		lenguaje=prompt("ingrese el lenguaje: “Python”, “C#” o “Javascript” ")
		while(lenguaje!="Python" && lenguaje!="C#" && lenguaje!="Javascript" )
		{
			lenguaje=prompt("error, ingrese el lenguaje: “Python”, “C#” o “Javascript” ")
		}//fin validacion

		dondeEstudio=prompt("ingrese el lugar dondeEstudio: “universitario”, “terciario” o “curso” ")
		while(dondeEstudio!="universitario" && dondeEstudio!="terciario" && dondeEstudio!="curso" )
		{
			dondeEstudio=prompt("error, ingrese el lugar dondeEstudio: “universitario”, “terciario” o “curso” ")
		}//fin validacion

        //---------------------logica

// a)El promedio de edad de los que estudian Python.
		switch(lenguaje)
		{
			case "Python":
				acumEdadPy+=edad;
				contPy+=1
				break;
		
			case "C#":
// b)La cantidad de mujeres que estudian C#
				if(sexo=="f")
				{
					contMujeresC+=1;
				}
				break;	
			default:
				break;
			
		}//fin del switch
		if(dondeEstudio=="universitario")
		{
			contadorUniversidad+=1;
		}
		contadorTotal+=1;
        //----------------------sigue 
        sigue=prompt("desea seguir ingresando? s/n");
    }//fin while
	// a)El promedio de edad de los que estudian Python.
	promedioPy=acumEdadPy/contPy;
	if(contPy!=0)
	{
		console.log("el promedio de edad de los que estudian python son: "+promedioPy);
	}else 
	{
		console.log("no se ingresaron programadores que estudien python");
	}

	// b)La cantidad de mujeres que estudian C#
	if(contMujeresC!=0)
	{
		console.log("la cantidad de mujeres que estudian C#: "+contMujeresC);
	}else 
	{
		console.log("no se ingresaron programadoras que estudian C#");
	}

	// c)El promedio de personas que aprendieron a programar en la Universidad.

	if(contadorUniversidad!=0)
	{
		promedioUniversitario=contadorUniversidad/contadorTotal;
		console.log("el promedio de programadores que estudiaron en la universidad es: "+promedioUniversitario);
	}else 
	{
		console.log("no se ingresaron programadores que hayan estudiado en la universidad");
	}

} */

/*
Nombre: Juan  Pablo Etchart
Inmoviliaria: Nos piden armar un programa para ingresar 
los siguientes datos de los inquilinos de los inmuebles: 
nombre,
lugar(CABA, Conurbano, Interior) 
tipo( dpto, casa, quinta) en CABA solo se alquilan dptos y casas
cantidad de habitantes (1-3 p/ dpto, 1-7 p/casa, 1-15 p/ quinta)
alquiler
INFORMAR: 
a) Cantidad de casa alquiladas en CABA
b) El inquilino con alquiler más caro
c) Del interior del país, la quinta más cara*/
/* function mostrar()
{
	let nombre;
	let lugar;
	let tipo;
	let cantidadHabitantes;
	let alquiler;
	
	

	let contCasaCaba=0;

	let banderaAlquilerCaro=true;
	let alquilerCaro;
	let nombreAlquilerCaro;

	let banderaQuintaInterior=true;
	let alquilerInteriorQuintaCro;

	let sigue="s";
    while(sigue == "s")
    {
        //----------------------------ingreso y validacion
		nombre=prompt("ingrese el nombre");
		while(!isNaN(parseInt(nombre)))
		{
			nombre=prompt("error,ingrese un nombre  valido");

		}
		lugar=prompt("ingrese el lugar: CABA, Conurbano, Interior")
		while(lugar!="CABA" && lugar!="Conurbano" && lugar!="Interior")
		{
			lugar=prompt("error, ingrese un lugar valido: CABA, Conurbano, Interior ")
		}//fin validacion
		
		tipo=prompt("ingrese el tipo:dpto, casa, quinta")
		while(tipo!="dpto" && tipo!="casa" && tipo!="quinta")
		{
			tipo=prompt("error, ingrese un tipo valido: dpto, casa, quinta ")
		}//fin validacion
		// (1-3 p/ dpto, 1-7 p/casa, 1-15 p/ quinta)
		switch(tipo)
		{
			case "casa":
				cantidadHabitantes=prompt("ingrese la cantidad de habitantes: 1-3");
				while(isNaN(cantidadHabitantes) || cantidadHabitantes<1 || cantidadHabitantes>3)
				{
					cantidadHabitantes=parseInt(prompt("error, ingrese una cantidad Habitantes para"+tipo+"valida"))
				}
				break;
			case "dpto":
				cantidadHabitantes=prompt("ingrese la cantidad de habitantes: 1-7");
				while(isNaN(cantidadHabitantes) || cantidadHabitantes<1 || cantidadHabitantes>7)
				{
					cantidadHabitantes=parseInt(prompt("error, ingrese una cantidad Habitantes para"+tipo+"valida"))
				}
				break;
			case "quinta":
				cantidadHabitantes=prompt("ingrese la cantidad de habitantes: 1-15");
				while(isNaN(cantidadHabitantes) || cantidadHabitantes<1 || cantidadHabitantes>15)
				{
					cantidadHabitantes=parseInt(prompt("error, ingrese una cantidad Habitantes para"+tipo+"valida"))
				}
				break;
		}// fin del switch
		alquiler=parseInt(prompt("ingrese el alquiler"))
		while(isNaN(alquiler) || alquiler<0 || alquiler>10000000)//maximo 10 millones por poner un limite
		{
			alquiler=parseInt(prompt("error, ingrese una alquiler valida"))
		}
		
        //---------------------logica
		switch(lugar)
		{
			case "CABA":
				// a) Cantidad de casa alquiladas en CABA
				if(tipo=="casa")
				{
					contCasaCaba+=1;
				}
				break;
			case "Conurbano":
				break;
			case "Interior":
				// c) Del interior del país, la quinta más cara
				if(tipo=="quinta" && (banderaQuintaInterior==true || alquilerInteriorQuintaCro<alquiler))
				{
					alquilerInteriorQuintaCro=alquiler;
					banderaQuintaInterior=false
				}
				;
				break;
		}//termina switch
		// b) El inquilino con alquiler más caro
		if(banderaAlquilerCaro==true || alquilerCaro<alquiler )
		{
			alquilerCaro=alquiler;
			nombreAlquilerCaro=nombre;
			banderaAlquilerCaro=false;
		}

        //----------------------sigue 
        sigue=prompt("desea seguir ingresando? s/n");
    }//fin while
// a) Cantidad de casa alquiladas en CABA	
	if(contCasaCaba!=0)
	{
		console.log("la cantidad de casas alquiladas en CABA: "+contCasaCaba);
	}else 
	{
		console.log("no se ingresaron alquilaron casas en caba");
	}
// b) El inquilino con alquiler más caro
	console.log("el inquilino con el alquiler mas caro es: "+nombreAlquilerCaro);
// c) Del interior del país, la quinta más cara
	if(banderaQuintaInterior==true)
	{
		console.log("no se ingresaron quintas en el interior");
	}else 
	{
		console("la quinta mas cara del interior del pais cuesta: "+alquilerInteriorQuintaCro)
	}
} */
/* 
Nombre: Juan Pablo Etchart
"Concierto"
Realizar el algoritmo que permita ingresar una cantidad indeterminada de tickets : 
recital
tipo("POP", "ROCK", " REGETTON"),
cantidad de entradas,(no mas de 20)  
precio de cada entrada, 
lugar("REX, "LUNA PARK", "TRASTIENDA"
a)La cantidad de entradas pares vendidas. 
b)A que tipo de recital la gente fue mas.  
c)El precio de la entrada más barata, el tipo de musica y a donde era el recital
*/
function mostrar()
{
	let recital;
	let tipo;
	let cantidadEntradas;
	let precioEntrada;
	let lugar;

	let contEntradasPares=0;

	let acumRock=0;
	let acumPop=0;
	let acumRegetton=0;

	let tipoMasVisto;

	let banderaEntradaBarato=true;
	let entradaBarata;
	let tipoEntradaBarato;
	let lugarEntradaBarato;

	let sigue="s";
    while(sigue == "s")
    {
        //----------------------------ingreso y validacion
		recital=prompt("ingrese el recital");
		while(!isNaN(parseInt(recital)))
		{
			recital=prompt("error,ingrese un recital  valido");
		}

		tipo=prompt("ingrese el tipo de recital: 'POP', 'ROCK', 'REGETTON'");
		while(tipo!="POP" && tipo!="ROCK" && tipo!="REGETTON")
		{
			tipo=prompt("error, ingrese un tipo valido de recital: 'POP', 'ROCK', 'REGETTON'")
		}//fin validacion
		cantidadEntradas=parseInt(prompt("ingrese la cantidad de entradas"))
		while(isNaN(cantidadEntradas) || cantidadEntradas<0 || cantidadEntradas>20)
		{
			cantidadEntradas=parseInt(prompt("error, ingrese una cantidad de entradas valida"))
		}
		precioEntrada=parseFloat(prompt("ingrese el precio de la entrada"));//flotante
        while(isNaN(precioEntrada))
        {
            precioEntrada=parseFloat(prompt("Error,ingrese el precio de la entrada"));
        }//fin del while
		lugar=prompt("ingrese el lugar de recital: 'REX', 'LUNA PARK', 'TRASTIENDA'");
		while(lugar!='REX' && lugar!="LUNA PAR" && lugar!="TRASTIENDA")
		{
			lugar=prompt("error, ingrese un lugar valido de recital: 'REX', 'LUNA PARK', 'TRASTIENDA'")
		}//fin validacion
        //---------------------logica
		// a)La cantidad de entradas pares vendidas. 
		if(cantidadEntradas%2==0)
		{
			contEntradasPares+=1;
		}
		// b)A que tipo de recital la gente fue mas. 
		switch(tipo)
		{
			case "POP":
				acumPop+=cantidadEntradas;
				break;
			case "REGETTON":
				acumRegetton+=cantidadEntradas;
				break;
			case "ROCK":
				acumRock+=cantidadEntradas
				break;
		} 
		// c)El precio de la entrada más barata, el tipo de musica y a donde era el recital
		if(banderaEntradaBarato==true || entradaBarata>entrada)
		{
			banderaEntradaBarato=false;
			entradaBarata=entrada;
			tipoEntradaBarato=tipo;
			lugarEntradaBarato=lugar;
		}
        //----------------------sigue 
        sigue=prompt("desea seguir ingresando? s/n");
    }//fin while

		// a)La cantidad de entradas pares vendidas. 
		if(contEntradasPares!=0)
		{
			console.log("la cantidadd de entradas pares vendidas es: "+contEntradasPares);
		}else 
		{
			console.log(" no se vendieron entradas pares");
		}
		
		// b)A que tipo de recital la gente fue mas. 
		if(acumPop>acumRegetton && acumPop>acumRock)
		{
			tipoMasVisto="Pop";
		}else if(acumRegetton>acumRock)
		{
			tipoMasVisto="Regetton";
		}else 
		{
			tipoMasVisto="Rock";
		} 
		console.log("el tipo mas visto es "+tipoMasVisto);
		// c)El precio de la entrada más barata, el tipo de musica y a donde era el recital
		console.log("el precio de la entrada mas barata es: "+entradaBarata+" el tipo  es: "+tipoEntradaBarato+" el lugar: "+lugarEntradaBarato);
}

