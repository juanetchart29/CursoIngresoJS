/*

Profe Orne — 23/02/2023 11:58
Recu 2020 3 bis: /Vacaciones en Familia" 
Nos ingresan una cantidad indeterminada de estadías de vacaciones, 
validando los datos ingresados:
nombre del pasajero titular, 
destino( “Brasil”, “baja” o “Europa”), 
temporada(“alta”,”baja”,“media”),
cantidad de pasajeros que viajan.
Informar:
a)El destino más elegido.
b)El nombre del pasajero titular que lleva menos pasajeros.
c)El promedio de personas, que viajan en temporada alta.
d)El total de personas que viajaron a Europa.*/

function mostrar()
{
	let nombre;//titular
	let destino;
	let temporada;
	let cantidad;

	let mayorDestino;

	let banderaNombreMenosPasajeros=true;
	let menorCantidadPasajeros;
	let nombreMenorCantidadPasajeros;

	let acumuladorTotal=0;
	let acumuladorTemporadaAlta=0;
	let promediopTempAlta;

	let contadorBrazil=0;
	let contadorEuropa=0;
	let contadorCaribe=0;
	let acumuladorEuropa=0;

	let sigue="s";
	while(sigue == "s")
	{
    //----------------------------ingreso y validacion
	nombre=prompt("ingrese el nombre");
	while(!isNaN(parseInt(nombre)))
	{
		nombre=prompt("error,ingrese un nombre  valido");

	}

	destino=prompt("ingrese ingrese un destino valido “Brasil”, “Caribe” o “Europa”")
	while(destino!="Brasil" && destino!="Caribe" && destino!="Europa" )
	{
		destino=prompt("error, ingrese un destino valido “Brasil”, “Caribe” o “Europa”")
	}//fin validacion


	temporada=prompt("ingrese ingrese un temporada valido “alta”, “baja” o “media”")
	while(temporada!="alta" && temporada!="baja" && temporada!="media" )
	{
		temporada=prompt("error, ingrese un temporada valido “alta”, “baja” o “media”")
	}//fin validacioncantidad=parseInt(prompt("ingrese la cantidad"))
	
	cantidad=parseInt(prompt(" ingrese una cantidad valida"))
	while(isNaN(cantidad) || cantidad<0 || cantidad>100)
	{
		cantidad=parseInt(prompt("error, ingrese una cantidad valida"))
	}

    //---------------------logica	
	//a
	switch (destino)
	{
		case "Brasil":
			contadorBrazil+=1;
			break;
		case "Caribe":
			contadorCaribe+=1;
			break;
		case "Europa":
			contadorEuropa+=1;
	//d
			acumuladorEuropa+=cantidad;
			break;	
	}

	if (contadorBrazil> contadorEuropa && contadorBrazil> contadorCaribe)
	{
		mayorDestino="brazil"
	}else if (contadorEuropa>contadorCaribe)
	{
		mayorDestino="europa"
	}else 
	{
		mayorDestino="caribe"
	}
//b
	if (banderaNombreMenosPasajeros) {
		menorCantidadPasajeros=cantidad;
		nombreMenorCantidadPasajeros=nombre;
		banderaNombreMenosPasajeros=false;
	} else if(menorCantidadPasajeros>cantidad){
		menorCantidadPasajeros=cantidad;
		nombreMenorCantidadPasajeros=nombre;
	}
//c
	acumuladorTotal+=cantidad;
	if(temporada=="alta")
	{
		acumuladorTemporadaAlta=cantidad;
	}



	    //----------------------sigue 
    sigue=prompt("desea seguir ingresando poductos? s/n");
	
	}//fin while
	promediopTempAlta=acumuladorTotal/acumuladorTemporadaAlta;
	document.write("el destino más elegido"+mayorDestino+"<br>");
    document.write("El nombre del pasajero titular que lleva menos pasajeros"+nombreMenorCantidadPasajeros+"<br>");
    document.write("El promedio de personas, que viajan en temporada alta."+promediopTempAlta+"<br>");
    document.write("el total de personas que viajaron a Europa"+acumuladorEuropa+"<br>");

}




/*
 Enunciado:
Bienvenidos.
En el ingreso a un viaje en avión nos solicitan nombre, nacionalidad ,
 edad, sexo("f" o "m") y estado civil("soltero", "casado" o "viudo")y temperatura corporal.
a) la Nacionalidad de la persona con mas temperatura.
b) Cuantos mayores de edad( más de 17) estan solteros
c) La cantidad de Mujeres que hay solteras o viudas.
d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
e) El promedio de edad entre las mujeres casadas.
function mostrar()
{
	let nombreIngresado;
    let edadIngresada;
    let sexoIngresado;
	let nacionalidadIngresada;
    let estadoCivilIngresado;
    let temperaturaIngresada;

	let continuo;
	
	let banderaNacionalidadMasTemperatura;
	let mayorTemperaturaNacionalidad;
	let mayorTemperatura;
	let contadorMayoresEdadSoltero;
	let contadorMujeresSolterasOViudas;
	let contadorAncianosFiebre;
	let acumuladorMujeresCasadas;
	let contadorMujeresCasadas;
	let promedioMujeresCasadas;

	contadorMayoresEdadSoltero = 0;
	contadorAncianosFiebre = 0;
	acumuladorMujeresCasadas = 0;
	contadorMujeresCasadas= 0;

	continuo = "s";
	banderaNacionalidadMasTemperatura = true;

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
                if(edadIngresada>17)
				{
					contadorMayoresEdadSoltero += 1
				}
				if(sexoIngresado == "f" || sexoIngresado == "F")
                {
                    contadorMujeresSolterasOViudas += 1;
                }//punto C
                break;
            case "viudo":
                if(edadIngresada >= 18)
                {
                    contadorMayoresEdadViudos += 1;
                }//punto B   
                if(sexoIngresado == "f" || sexoIngresado == "F")
                {
					contadorMujeresSolterasOViudas+= 1;
                }//punto C
                break;
			case "casado":
				if(sexoIngresado=="f" || sexoIngresado=="F")
				{
					contadorMujeresCasadas += 1;
					acumuladorMujeresCasadas += edadIngresada;
				}
				break;
			
				
        }//termino switch de estado civil
		
		if(banderaNacionalidadMasTemperatura)
		{
			mayorTemperatura= temperaturaIngresada;
			mayorTemperaturaNacionalidad = nacionalidadIngresada;
			banderaNacionalidadMasTemperatura = false;
		}else if (mayorTemperatura < temperaturaIngresada)
		{
			mayorTemperatura= temperaturaIngresada;
			mayorTemperaturaNacionalidad = nacionalidadIngresada;
		}// termino punto A

		if(edadIngresada>= 60 && edadIngresada>= 38)
        {
            contadorAncianosFiebre += 1;
        }// termino punto D

		
		continuo = prompt("desea Ingresar otra persona  's'/'n'")
	}
    promedioMujeresCasadas =acumuladorMujeresCasadas / contadorMujeresCasadas;
	
    document.write("la nacionalidad de la persona con mas temperatura es"+mayorTemperaturaNacionalidad+"con"+mayorTemperatura+"<br>");
    document.write("la cantidad de mayores de edad solters son"+contadorMayoresEdadSoltero+"<br>");
    document.write("la cantidad dde mujeres solters o viudas son: "+contadorMujeresSolterasOViudas+"<br>");
    document.write("cantidad de personas de mas de 60 años, que tinen mas de 38 de temperatura: "+contadorAncianosFiebre+"<br>");
    document.write("el promedio de las mujeres casadas"+promedioMujeresCasadas+"<br>");
}*/