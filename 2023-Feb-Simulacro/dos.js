/*
Realizar el algoritmo que permita ingresar los datos de los alumnos 
de una division de la UTN FRA, los datos solicitados son:
Nombre
Situcación laboral ("buscando" , "trabajando" o "solo estudiante")
Cantidad de materias( mas de cero y menos de 8)
Sexo ( femenino , masculino , no binario)
Nota promedio (entre 0 y 10)
Edad (validar)


Se debe informar de existir, o informar que no existe , en el caso que corresponda.


a) El nombre del mejor promedio de los que tarbajan o estan buscando
b) El nombre del mas viejo de los alumnos que solo sea estudiantes
c) El promedio de nota por situacion laboral
d) La edad y nombre del que cursa menos cantidad de materias y que este buscando trabajo
*/
function mostrar()
{
    let nombre;
    let situacionLaboral;
    let cantidadMaterias;
    let sexo;
    let notaPromedio;
    let edad;

    let banderaMejorPromediotrabajo=true;
    let mejorPromedioTrabaja;
    let nombreMejorPromedioTrabaja;

    let banderaMasViejo=true;
    let nombreMasViejo;
    let edadMasViejo;
    
    let pormedioNotaBuscando;
    let acumuladorBuscando=0;
    let contadorBuscando=0;

    let promedioTrabajando;
    let acumuladorTrabajando=0;
    let contadorTrabajando=0;

    let promedioEstudiante;
    let contadorEstudiante=0;
    let acumuladorEstudiante=0

    let banderaMenosCapaz=true;;
    let nombreMenosCapaz;
    let edadMenosCapaz;
    let cantidadMateriasMenosCapaz;

    let sigue="s";

    while(sigue == "s")
    {
        //----------------------------ingreso y validacion
        nombre=prompt("ingrese el nombre");
        while(!isNaN(parseInt(nombre)))
        {
            nombre=prompt("error,ingrese un nombre  valido");

        }
        situacionLaboral=prompt("ingrese situacionLaboral: 'buscando' , 'trabajando' o 'estudiante'")
        while(situacionLaboral!="buscando" && situacionLaboral!="trabajando" && situacionLaboral!="estudiante" )
        {
            situacionLaboral=prompt("error, ingrese valido  'buscando' , 'trabajando' o 'estudiante'")
        }//fin validacion

        cantidadMaterias=parseInt(prompt("ingrese la cantidadMaterias"))
        while(isNaN(cantidadMaterias) || cantidadMaterias<0 || cantidadMaterias>8)
        {
            cantidadMaterias=parseInt(prompt("error, ingrese una cantidadMaterias valida"))
        }

        sexo=prompt("ingrese un sexo: 'f'/'m'/'nb'")
        while(sexo != "f" &&  sexo != "m" && sexo != "nb")
        {
            sexo=prompt("error,ingrese un sexo valido: 'f'/'m'")
        }//termina while

        notaPromedio=parseInt(prompt("ingrese la notaPromedio"))
        while(isNaN(notaPromedio) || notaPromedio<1 || notaPromedio>10)
        {
            notaPromedio=parseInt(prompt("error, ingrese una notaPromedio valida"))
        }

        edad=parseInt(prompt("Error,ingrese una edad valida"));
        while(isNaN(edad) || edad < 0 || edad > 123) // EDAD <18 
        {
            edad=parseInt(prompt("Error,ingrese una edad valida"));
        }//fin del while

        //--------------------logica
        switch(situacionLaboral)
        {
    //b
            case "estudiante":
                if(banderaMasViejo)
                {
                    edadMasViejo=edad;
                    nombreMasViejo=nombre;
                    banderaMasViejo=false;
                }else if(edadMasViejo<edad)
                {
                    edadMasViejo=edad;
                    nombreMasViejo=nombre;
                }
                contadorEstudiante+=1;
                acumuladorEstudiante+=notaPromedio;
                break;
             //A
            case "buscando":
                contadorBuscando+=1;
                acumuladorBuscando+=notaPromedio
            case "trabajando":   
                if(banderaMejorPromediotrabajo || notaPromedio<notaPromedio)
                {
                    nombreMejorPromedioTrabaja=nombre;
                    mejorPromedioTrabaja=notaPromedio;
                    banderaMejorPromediotrabajo=false;
                }
                acumuladorTrabajando+=notaPromedio
                contadorTrabajando=+1
                
        }//fin del switch
        //----------------------sigue
        sigue=prompt("desea seguir ingresando poductos? s/n");
    }//fin while
    if (contadorTrabajando!=0 || contadorBuscando!=0)
    {
        document.write("el nombre del mejor promedio de los que trabajan o esta buscando es"+nombreMejorPromedioTrabaja+"<br>");
    
    }

    if(contadorEstudiante!=0)
    {
        document.write("el nombre del mas viejo de los alumnos que solo estudia"+nombreMasViejo+"<br>");
        document.write("el promedio de la nta promedio de los que eta estudiando es: "+promedioEstudiante+"<br>");
    }
    if (contadorTrabajando!=0)
    {
        document.write("el promedio de la nta promedio de los que etan trabajandoo es: "+promedioTrabajando+"<br>");
    }
    if (contadorBuscando!=0)
    {
        document.write("el promedio de la nta promedio de los que eta buscando es: "+pormedioNotaBuscando+"<br>");
        document.write("la edad y el nombre del que cursa menos materias "+edadMenosCapaz+" "+nombreMenosCapaz+"<br>");
    }

}
