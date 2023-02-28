/*
El alumno deberá ingresar: Nombre del alumno 
Carrera (Programación, Psicología, Diseño gráfico) 
Estado de la carrera: en curso-abandono-finalizado 
Sexo (femenino-masculino-nobinario) Edad (18 o más) 
Nota (entre 1 y 10) Se desconoce la cantidad de alumnos que se ingresaran.
 El programa deberá informar:
 A. Cantidad total de alumnos de cada carrera. 
B. Cantidad total de mujeres que cursan la carrera de programación 
C. Cantidad de alumnos no binarios. D. Promedio de notas de los alumnos finalizantes. 
E. Nombre, sexo y edad del alumno mas viejo en la carrera de psicología.
 F. Nombre, nota y estado de la carrera del mejor alumno no binario que estudia psicología.)
 G. ¿Cuál es la carrera que tiene más alumnos?
*/
function mostrar()
{
	
    let nombre;
    let carrera;
    let estadoCarrera;
    let sexo;
    let nota;

    let contadorProgramacion=0;
    let contadorPsicologia=0;
    let contadorDiseño=0;

    let contadorF=0;
    
    let contadorNb=0;

    let promedioFinalizantes;
    let acumuladorFinalizantes=0;
    let contadorFinalizantes=0;
    
    let banderaMasViejoPsicologia=true;
    let edadMasViejPsicologia;
    let sexoMasViejPsicologia;
    let nombreMasViejPsicologia;

    let banderaMejorAlumnoPsicologia=true;
    let notaMejorAlumnoPsicologia;
    let nombreMejorAlumnoPsicologia;
    let estadoCarreraMejorAlumnoPsicologia;

    let carreraMasAlmnos;

    let sigue="s";


    while(sigue == "s")
    {
        //----------------------------ingreso y validacion
        nombre=prompt("ingrese el nombre");
        while(!isNaN(parseInt(nombre)))
        {
            nombre=prompt("error,ingrese un nombre  valido");

        }
        carrera=prompt("ingrese  la carrera: programacion,psicologia,diseño")
        while(carrera!="programacion" && carrera!="psicologia" && carrera!="diseño")
        {
            carrera=prompt("error, ingrese  la carrera valido: programacion,psicologia,diseño")
        }//fin validacion
        estadoCarrera=prompt("ingrese  la estadoCarrera: curso,abandono,finalizado")
        while(estadoCarrera!="curso" && estadoCarrera!="abandono" && estadoCarrera!="finalizado")
        {
            estadoCarrera=prompt("error, ingrese  la estadoCarrera valido: curso,abandono,finalizado")
        }//fin validacion
        sexo=prompt("ingrese un sexo: 'f'(femenino)/'m'(masculino)/'nb'(no binario)")
        while(sexo != "f" &&  sexo != "m" && sexo != "nb")
        {
            sexo=prompt("error,ingrese un sexo valido: 'f'/'m'")
        }//termina calidacion
        edad=parseInt(prompt("ingrese una edad valida"));
        while(isNaN(edad) || edad < 18 || edad > 123)// 18 o mas ==>      <18
        {
            edad=parseInt(prompt("Error,ingrese una edad valida"));
        }//fin del while
        nota=parseInt(prompt("ingrese la nota"))
        while(isNaN(nota) || nota<1 || nota>10)
        {
            nota=parseInt(prompt("error, ingrese una nota valida"))
        }
        //---------------------logica
        switch(carrera)
        {
            case "diseño":
                contadorDiseño+=1;
                break;
            
            case "programacion":
                contadorProgramacion+=1
                if(sexo=="f" && estadoCarrera=="cursando")
                {
                    contadorF+=1
                }
                break;
            case "psicologia":
                
                // e
                if(banderaMasViejoPsicologia)
                {
                    edadMasViejPsicologia=edad;
                    nombreMasViejPsicologia=nombre;
                    sexoMasViejPsicologia=sexo;
                    banderaMasViejoPsicologia=false;
                }else if(edadMasViejPsicologia<edad)
                {
                    edadMasViejPsicologia=edad;
                    nombreMasViejPsicologia=nombre;
                    sexoMasViejPsicologia=sexo;
                }
                /*CORECCION
                if(contadorPsicologia==0 || edadMasViejaPsicologia < edad)
                {
                    edadMasViejPsicologia=edad;
                    nombreMasViejPsicologia=nombre;
                    sexoMasViejPsicologia=sexo;
                } 
                 */
                //f
                if(sexo=="nb")
                {
                    if(banderaMejorAlumnoPsicologia)
                    {
                        notaMejorAlumnoPsicologia=nota;
                        nombreMejorAlumnoPsicologia=nombre;
                        estadoCarreraMejorAlumnoPsicologia=estadoCarrera;
                        banderaMejorAlumnoPsicologia=false;

                         
                    }else if(notaMejorAlumnoPsicologia<nota)
                    {
                        estadoCarreraMejorAlumnoPsicologia=estadoCarrera;
                        notaMejorAlumnoPsicologia=nota;
                        nombreMejorAlumnoPsicologia=nombre;
                    }
                }
                contadorPsicologia+=1
                //correccion
                /* 
                if(sexo=="nb" && (banderaMejorAlumnoPsicologia || notaMejorAlumnoPsicologia<nota))
                {
                    
                    notaMejorAlumnoPsicologia=nota;
                    nombreMejorAlumnoPsicologia=nombre;
                    estadoCarreraMejorAlumnoPsicologia=estadoCarrera;
                    banderaMejorAlumnoPsicologia=false;
                    
                }
                */
                
                break;
        }
        //c
        if(sexo=="nb")
        {
            contadorNb+=1;
        }
        //d
        if(estadoCarrera=="finalizado")
        {
            contadorFinalizantes+=1;
            acumuladorFinalizantes+=nota;
        }
        //----------------------sigue 
        sigue=prompt("desea seguir ingresando poductos? s/n");
    }//fin while
    promedioFinalizantes=acumuladorFinalizantes/contadorFinalizantes;
    if(contadorDiseño>contadorProgramacion && contadorDiseño>contadorPsicologia)
    {
        carreraMasAlmnos="diseño";
    }else if(contadorProgramacion>contadorPsicologia)
    {
        carreraMasAlmnos="programacion";
    }else 
    {
        carreraMasAlmnos="psicologia";
    }
    document.write("la cantidad de alumnos de psicologia"+contadorPsicologia+"<br>");
    document.write("la cantidad de alumnos de diseño"+contadorDiseño+"<br>");
    document.write("la cantidad de alumnos de programacion"+contadorProgramacion+"<br>");
    document.write("cantidad de muheres en programcion"+contadorF+"<br>");
    document.write("promedio de notas entre alumnos finalizantes"+promedioFinalizantes+"<br>");
    document.write("nombre del alumno mas viejo en psicologia"+nombreMasViejPsicologia+"<br>");
    document.write("edad del alumno mas viejo en psicologia"+edadMasViejPsicologia+"<br>");
    document.write("sexo del alumno mas viejo en psicologia"+sexoMasViejPsicologia+"<br>");
    document.write("nota del mejor alumno no binario"+notaMejorAlumnoPsicologia+"<br>");
    document.write("estado de carrera del mejor alumno no binario"+estadoCarreraMejorAlumnoPsicologia+"<br>");
    document.write("nombre del mejor alumno no binario"+nombreMejorAlumnoPsicologia+"<br>");
    document.write("la carrera con mas alumnos es "+carreraMasAlmnos+"<br>");
}//fin de funcion
// ---------------------------------------------------------------------------------------- 