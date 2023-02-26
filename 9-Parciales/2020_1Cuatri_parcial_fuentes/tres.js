/*  Parcial 2020 3 bis: /* "Mapa Mundi"
Realizar el algoritmo que permita ingresar 5 paises:
el continente (validar entre America , Asia , Europa ,Africa y Oceania) 
el nombre del país, 
cantidad de habitantes en millones entre 1 y 7000 (validar)
el nivel de pobresa entre (pobre, rico, millonario) en europa no hay paises pobre(validar)
la temperaruta mínima que se registra en su territorio(entre -50 y 50)
a)La cantidad de temperaturas pares.
b)la cantidad de temperaturas impares de europa
c)El nombre del pais con menos habitantes
d)la cantidad de paises que superan los 40 grados.
e)la cantidad de paises de america que tienen menos de 0 grados .
f)el promedio de habitantes entre los paises ingresados .
g)el promedio de habitantes entre los paises que superan los 40 grados
H) la temperatura mínima ingresada, y nombre del pais que registro esa temperatura. 
i) que continente tiene mas habitantes.*/ 


function mostrar()
{
    let continente;
    let nombre;
    let cantidadDeHabitantes;
    let nivlePobresa;
    let temperatura;

    let contadorTemperaturaPar=0;
    let contadorTemperaturaImparEuropa=0;
    let banderaPaisConMenosHabitantes=true;
    let menorCantidadDeHabitantes;
    let nombreMenorCantidadDeHabitantes;

    let contadorSuperanCuarenta=0;
    let contadorAmericaMenosCero=0;

    let contadorVueltas=0;
    let promedioCantidadHabitantes;
    let acumuladorCantidadDeHabitantes=0;
    let acumuladorCantidadDeHabitantesSuperanCuarenta=0;
    let promedioSuperanCuarenta;

    let banderaTemperaturaMinima=true;;
    let temperatutaMinima;
    let nombrePaisTemperaturaMinima;
    
    
    let acumuladorAmerica=0;
    let acumuladorAsia=0;
    let acumuladorEuropa=0;
    let acumuladorAfrica=0;
    let acumuladorOceania=0;

    let comparador=0;
    let continenteMasHabitantes;


    for(let i=0;i<5;i++)
    {
        //inputs de datos---------------------------
        continente=prompt("ingrese el continente:America ,  , Europa ,Africa y Oceania");
        while(continente!="America"&&continente!="Asia"&& continente!="Europa"&& continente!="Africa"&& continente!="Oceania" )
        {
            continente=prompt("error,ingrese el continente: , Asia , Europa ,Africa y Oceania");
        }

        nombre=prompt("ingrese el nombre");
        while(!isNaN(parseInt(nombre)))
        {
            nombre=prompt("error,ingrese un nombre  valido");
        }

        cantidadDeHabitantes=parseInt(prompt("ingrese un numero de habitantes"));//entero
        while(isNaN(cantidadDeHabitantes)||cantidadDeHabitantes<1 || cantidadDeHabitantes>7000)
        {
            cantidadDeHabitantes=parseInt(prompt("Error,ingrese un numero de habitantes valido"));
        }//fin del while
        
        
        nivlePobresa=prompt('ingrese el nuvel de pobreza: pobre, rico, millonario');
        while(nivlePobresa!="pobre" && nivlePobresa!= "rico" && nivlePobresa!= "millonario")
        {
            nivlePobresa=prompt('error,ingrese el tipo de producto: "rico" , " pobre" o "millonario"');
        }//fin del while

        temperatura=parseInt(prompt("ingrese una temperatura"));//entero
        while(isNaN(temperatura)|| temperatura<-50 || temperatura>50)
        {
            temperatura=parseInt(prompt("Error,ingrese una temperatura"));
        }//fin del while
        //---------------- logica 

        if(temperatura%2==0)
        {
            contadorTemperaturaPar+=1;
        }


        switch(continente)
        {
            case "Africa":
                acumuladorAfrica+=cantidadDeHabitantes;
                break;
            case "America":
                if (temperatura<0)
                {
                    contadorAmericaMenosCero+=1;
                }
                acumuladorAmerica+=cantidadDeHabitantes;
                break;
            case "Europa":
                if (temperatura%2!=0)
                {
                    contadorTemperaturaImparEuropa+=1;
                }
                acumuladorEuropa+=1;
                break;

            case "Oceania":
                acumuladorOceania+=cantidadDeHabitantes;
                break;
            case "Asia":
                acumuladorAsia+=cantidadDeHabitantes;
                break;
        }


        if (banderaPaisConMenosHabitantes)
        {
            menorCantidadDeHabitantes=cantidadDeHabitantes;
            nombreMenorCantidadDeHabitantes=nombre;
            banderaPaisConMenosHabitantes=false;
        }else if (menorCantidadDeHabitantes>cantidadDeHabitantes)
        {
            menorCantidadDeHabitantes=cantidadDeHabitantes;
            nombreMenorCantidadDeHabitantes=nombre;
        }
        

        if (temperatura>40)
        {
            contadorSuperanCuarenta+=1;
            acumuladorCantidadDeHabitantesSuperanCuarenta=+temperatura;
        }
        


        if(banderaTemperaturaMinima)
        {
            temperatutaMinima=temperatura;
            nombrePaisTemperaturaMinima=nombre;
            banderaTemperaturaMinima=false;
        }else if (temperatutaMinima>temperatura)
        {
            temperatutaMinima=temperatura;
            nombrePaisTemperaturaMinima=nombre;
        }

        
        if(acumuladorAfrica>comparador)
        {
            comparador=acumuladorAfrica;
            continenteMasHabitantes=continente;

        }else if(acumuladorOceania>comparador)
        {
            comparador=acumuladorOceania;
            continenteMasHabitantes=continente;
        }else if (acumuladorAmerica>comparador)
        {
            comparador=acumuladorAmerica;
            continenteMasHabitantes=continente;
        }else if(acumuladorAsia>comparador)
        {
            comparador=acumuladorAsia;
            continenteMasHabitantes=continente;
        }else if(acumuladorEuropa>comparador)
        {
            comparador=acumuladorEuropa;
            continenteMasHabitantes=continente;
        }

        contadorVueltas+=1;
        acumuladorCantidadDeHabitantes+=cantidadDeHabitantes;
    }//fin del for
    promedioCantidadHabitantes=acumuladorCantidadDeHabitantes/contadorVueltas;
    promedioSuperanCuarenta=acumuladorCantidadDeHabitantesSuperanCuarenta/contadorSuperanCuarenta;

    document.write("la cantidad de temperaturas pares"+contadorTemperaturaPar+"<br>");
    document.write("contador de temperatura impar de europa"+contadorTemperaturaImparEuropa+"<br>");        
    document.write("rl nombre con nenos habitantes"+nombreMenorCantidadDeHabitantes+"<br>");
    document.write("la cantidad de paises que superan los 40 grados"+contadorSuperanCuarenta+"<br>"); 
    document.write("la cantidad de paises de america que tienen menos de 0 grados grados"+contadorAmericaMenosCero+"<br>"); 
    document.write("el promedio de habitantes entre los paises que superan los 40 grados"+promedioSuperanCuarenta+"<br>"); 
    document.write("el promedio de habitantes entre los paises ingresados"+promedioCantidadHabitantes+"<br>"); 
    document.write("la temperatura minima y el nombre del pais que registro esa temperatura"+temperatutaMinima+nombrePaisTemperaturaMinima+"<br>"); 
    document.write("el continente que mas habitantes tiene es "+continenteMasHabitantes+"<br>"); 
    
    
}



/*
Nombre: Juan Pablo Etchart
En el ingreso a un viaje en avion nos solicitan nombre , edad, sexo("f" o "m") 
y estado civil("soltero", "casado" o "viudo")y temperatura corporal.
a) El nombre de la persona con mas temperatura.
b) Cuantos mayores de edad estan viudos
c) La cantidad de hombres que hay solteros o viudos.
d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
e) El promedio de edad entre los hombres solteros. 
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
*/