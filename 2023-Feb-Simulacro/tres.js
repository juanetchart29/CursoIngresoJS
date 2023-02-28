/*
nombre:; juna pablo etchart
Enunciado:
Bienvenidos.
debemos alquilar el servicio de transporte para llegar
a Bariloche con un grupo de personas, de cada persona
debemos optener los siguientes datos:
Nombre,
Obra Social ("PAMI", "OSDE" o "otras"),
Edad(solo pueden ir mayores de edad),
temperatura corporal(validar)
y sexo (validar).
NOTA:el precio por pasajero es de $9000.
Se debe informar (solo si corresponde):
a) La cantidad de personas con PAMI de mas de 60 años.
b) El nombre y temperatura de la mujer OSDE mas joven.
c) Cuanto sale el viaje total sin descuento.
d) Si hay mas del 50% de los pasajeros que pertenecen a PAMI,
el precio final tiene un descuento del 25%, que solo mostramos si corresponde.
*/
function mostrar()
{
    let nombre;
    let obraSocial;
    let edad;
    let temperatura;
    let sexo;

    let contadorPamiViejo=0;

    let banderaOsdeMasJoven=true;
    let nombreOsdeMasJoven;
    let temperaturaOsdeMasJoven;
    let edadMasJoven;

    let precioViaje=9000;

    let contadorPami=0;

    let contadorTotal=0;
    let promedioPami;
    let descuento=0;
    let precioFinal;

    let sigue="s";

    while(sigue == "s")
    {
        //----------------------------ingreso y validacion
        nombre=prompt("ingrese el nombre");
        while(!isNaN(parseInt(nombre)))
        {
            nombre=prompt("error,ingrese un nombre  valido");

        }

        edad=parseInt(prompt("Error,ingrese una edad valida"));
        while(isNaN(edad) || edad < 0 || edad > 123)
        {
            edad=parseInt(prompt("Error,ingrese una edad valida"));
        }//fin del while

        obraSocial=prompt('ingrese la obra socual, "PAMI", "OSDE" o "otras"')
        while(obraSocial!="PAMI" && obraSocial!="OSDE" && obraSocial!="otras")
        {
            obraSocial=prompt('ingrese la obra socual, "PAMI", "OSDE" o "otras"')
        }//fin validacion

        temperatura=parseInt(prompt("ingrese la temperatura en millones"))
        while(isNaN(temperatura) || temperatura<34 || temperatura>45)
        {
            temperatura=parseInt(prompt("error, ingrese una temperatura valida"))
        }

        sexo=prompt("ingrese un sexo: 'f'/'m'/'nb'")
        while(sexo != "f" &&  sexo != "m" && sexo != "nb")
        {
            sexo=prompt("error,ingrese un sexo valido: 'f'/'m'")
        }//termina while
        //---------------------logica
        switch(obraSocial)
        {
            case "OSDE":
                //B
                if(sexo=="f")
                {
                    if(banderaOsdeMasJoven)
                    {
                        nombreOsdeMasJoven=nombre;
                        edadMasJoven=edad;
                        temperaturaOsdeMasJoven=temperatura;
                        banderaOsdeMasJoven=false;
                    }else if(edadMasJoven>edad)
                    {
                        nombreOsdeMasJoven=nombre;
                        edadMasJoven=edad;
                        temperaturaOsdeMasJoven=temperatura; 
                    }
                }
                break;
            case "PAMI":
                contadorPami+=1;
                //A
                if(edad>=60)
                {
                    contadorPamiViejo+=1
                }
                break;
            default:
                break;
         
        }
        //----------------------sigue 
        sigue=prompt("desea seguir ingresando poductos? s/n");
        contadorTotal+=1;

    }//fin while
    promedioPami=contadorPami*100/contadorTotal
    document.write("la cantidad de personas de pami mayores a 60"+contadorPamiViejo+"<br>");
    document.write("el nombre y temperatura de la mujer osde mas joven"+nombreOsdeMasJoven+" "+temperaturaOsdeMasJoven+"<br>");
    document.write("el viaje sin descuento: "+precioViaje+"<br>");
    if(promedioPami>=50)
    {
        descuento=25
        precioFinal=precioViaje*(1+descuento/100) 
        document.write("el precio final del viaje: "+precioFinal+"<br>");
    }
   
    
}//fin funcion mostrar
