/* Parcial 2020 2 bis: /"La veterinaria" pedir el ingreso de 10 mascotas
validar
tipo ( gato , perro , pajaro y otros)solo esos cuatro tipo
raza: si es perro (pastor, toy, callejero) y 
si gato (siamés, turco, Peterbald , generico) 
y si es de tipo "otros" o pajaro , pedir solo un texto
Edad entre 1 y 20 para gatos y perros , para "otros" entre 1 y 100 , para pajaro 1 de 50
nombre (no se permite solo numero)
mostrar por cada tipo el nombre del mas viejo , solo si hay de ese tipo (hay que validar en un if)!!!!!!!!!!!!!!!!!!!!
mostrar que raza de gatos tiene mas animales y el promedio de edad de esta raza/ */
function mostrar()
{
  let tipoProducto;
  let razaPerro;
  let razaGato;
  let textoDefault;
  let edad;
  let nombre;

  let banderaMasGrandeGato=true;
  let edadMasGrandeGato;
  let nombreMasGrandeGato;


  let banderaMasGrandePerro=true;
  let edadMasGrandePerro;
  let nombreMasGrandePerro;

  let banderaMasGrandePajaro=true;;
  let edadMasGrandePajaro;
  let nombreMasGrandePajaro;

  let banderaMasGrandeOtro=true;
  let edadMasGrandeOtro;
  let nombreMasGrandeOtro;

  let contadorSiames=0;
  let contadorTurco=0;
  let contadorPeterbald=0;
  let contadorGenerico=0;
  let comparador=0;

  let acumuladorEdadSiames=0;
  let acumuladorEdadTurco=0;
  let acumuladorEdadPeterbald=0;
  let acumuladorEdadGenerico=0;

  let promedioEdadMasViejo;




  

  for(let i=0;i<3;i++)
  {
    tipoProducto=prompt('ingrese el animl: gato , perro , pajaro y otros');
    
    while(tipoProducto!="gato" && tipoProducto!= "perro" && tipoProducto!= "pajaro" && tipoProducto!="otros")
    {
        tipoProducto=prompt(" error, ingrese el animl: gato , perro , pajaro y otros");
        
    }
    nombre=prompt("ingrese el nombre");
    while(!isNaN(parseInt(nombre)))
    {
      nombre=prompt("error,ingrese un nombre  valido");
    }
    switch(tipoProducto)
    {
      case"gato":
        edad=parseInt(prompt("ingrese una edad valida"));
        while(isNaN(edad) || edad < 0 || edad > 21)
        {
            edad=parseInt(prompt("Error,ingrese una edad valida"));
        }//fin del while
        razaGato==prompt('ingrese el animl: siames , turco , Peterbald y generico');
        
        while(razaGato!="siames" && razaGato!= "turco" && razaGato!= "Peterbald" && razaGato!="generico")
        {
            razaGato=prompt(" error, ingrese el animl: siames , turco , Peterbald y generico");
            
        }
        if(banderaMasGrandeGato)
        {
          edadMasGrandeGato=edad;
          nombreMasGrandeGato=nombre;
          banderaMasGrandeGato=false;
        }else if (edadMasGrandeGato<edad)
        {
          edadMasGrandeGato=edad;
          nombreMasGrandeGato=nombre;
        }
        switch(razaGato)
        {
          case "siames":
            contadorSiames+=1;
            acumuladorEdadSiames+=edad;
            break;
          case "turco":
            contadorTurco+=1;
            acumuladorEdadTurco+=edad;
            break;
          case "peterbald":
            contadorPeterbald+=1;
            acumuladorEdadPeterbald+=edad;
            break;
          case "generico":
            contadorGenerico+=1;
            acumuladorEdadGenerico+=edad;
            break;
        }
        
        break;
      case "perro":
        edad=parseInt(prompt("Error,ingrese una edad valida"));
        while(isNaN(edad) || edad < 0 || edad > 21)
        {
            edad=parseInt(prompt("Error,ingrese una edad valida"));
        }//fin del while
        razaPerro==prompt('ingrese el animl: pastor ,toy y callejero');
        
        while(razaPerro!= "pastor" && razaPerro!= "toy" && razaPerro!="callejero")
        {
            razaPerro=prompt(" error, ingrese el animl: pastor , toy, y callejero");
            
        }
        if(banderaMasGrandePerro)
        {
          edadMasGrandePerro=edad;
          nombreMasGrandePerro=nombre;
          banderaMasGrandePerro=false;
        }else if(edadMasGrandePerro<edad)
        {
          edadMasGrandePerro=edad;
          nombreMasGrandePerro=nombre;
        }
        break;
      case "otros":
        edad=parseInt(prompt("ingrese una edad valida"));
        while(isNaN(edad) || edad < 0 || edad > 100)
        {
            edad=parseInt(prompt("Error,ingrese una edad valida"));
        }//fin del while
        textoDefault=prompt("ingrese el texto");
        while(!isNaN(parseInt(textoDefault)))
        {
          textoDefault=prompt("error,ingrese el texto");
        }
        if(banderaMasGrandeOtro)
        {
          edadMasGrandeOtro=edad;
          nombreMasGrandeOtro=nombre;
          banderaMasGrandeOtro=false;
        }else if (edadMasGrandeOtro<edad)
        {
          edadMasGrandeOtro=edad;
          nombreMasGrandeOtro=nombre;
        }
        break;   
      case "pajaro":      
        edad=parseInt(prompt("ingrese una edad valida"));
        while(isNaN(edad) || edad < 0 || edad > 50)
        {
            edad=parseInt(prompt("Error,ingrese una edad valida"));
        }//fin del while
        textoDefault=prompt("ingrese el texto");
        while(!isNaN(parseInt(textoDefault)))
        {
          textoDefault=prompt("error,ingrese el texto");
        }
        if(banderaMasGrandePajaro)
        {
          edadMasGrandePajaro=edad;
          nombreMasGrandePajaro=nombre;
          banderaMasGrandePajaro=false;
        }
        break;
    }//fin del switch
   
 }//fin del for
 if (contadorGenerico>comparador)
  {
    razaGato="generico";
    comparador=contadorGenerico;
    promedioEdadMasViejo=acumuladorEdadGenerico/contadorGenerico;
  }else if (contadorPeterbald>comparador)
  {
    razaGato="Peterbald";
    comparador=contadorPeterbald;
    promedioEdadMasViejo=acumuladorEdadPeterbald/contadorPeterbald;
  }else if (contadorTurco>comparador)
  {
    razaGato="Turco";
    comparador=contadorTurco;
    promedioEdadMasViejo=acumuladorEdadTurco/contadorTurco;
  }else if (contadorSiames>comparador)
  {
    razaGato="siames";
    comparador=contadorSiames;
    promedioEdadMasViejo=acumuladorEdadSiames/contadorSiames;
  }  
 document.write("el mas viejo de los gatos es:"+nombreMasGrandeGato+"<br>");
 document.write("el mas viejo de los Perros es:"+nombreMasGrandePerro+"<br>");
 document.write("el mas viejo de los Pajaros es:"+nombreMasGrandePajaro+"<br>");
 document.write("el mas viejo de Otros es:"+nombreMasGrandeOtro+"<br>");
 document.write("la raza de gatos que m as animales tiene es"+razaGato+" e el promedio de gatos es:"+promedioEdadMasViejo+"<br>");
}//fin de la funcion

/* Realizar el algoritmo que permita ingresar 
los datos de una compra productos de la construccion, hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero ),

Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo con mas cantidad de bolsas.
f) El tipo mas caro 
function mostrar()
{
  let tipoProducto;
  let cantidadBolsas;
  let precioBolsa;
  
  let acumuladorBolsas;
  let descuento;

  let precioFinal;
  let acumuladorDePrecio;
  let precioBruto;


  let banderaCantidadBolsas;
  let mayorCantidadBolsas;
  let tipoMayorCantidadBolsas;
  let banderaMayorPrecio;
  let mayorPrecio;
  let tipoMayorPrecio;

  let sigue;

  sigue = "s"

  while(sigue == "s")
  {
    tipoProducto=prompt('ingrese el tipo de producto: "cemento , "cal" o "arena"');
    while(tipoProducto!="cal" && tipoProducto!= "cemento" && tipoProducto!= "arena")
    {
        tipoProducto=prompt('error,ingrese el tipo de producto: "cemento , "cal" o "arena"');
    }
    cantidadBolsas=parseInt(prompt("ingrese la cantidad de bolsas"));
    while(isNaN(cantidadBolsas) || cantidadBolsas<0)
    {
        cantidadBolsas=parseInt(prompt("Error,ingrese una cantidad valida"));
    }//fin del while
    precioBolsa=parseInt(prompt("ingrese un precio" ));
    while(isNaN(precioBolsa) || precioBolsa<=0)
    {
        precioBolsa=parseInt(prompt("Error,ingrese un precio valido"));
    }//fin del while
    //punto D
    if (banderaCantidadBolsas)
    {
      mayorCantidadBolsas=cantidadBolsas;
      tipoMayorCantidadBolsas=tipoProducto;
      banderaCantidadBolsas=false;
    }else if(mayorCantidadBolsas<cantidadBolsas)
    {
      mayorCantidadBolsas=cantidadBolsas;
      tipoMayorCantidadBolsas=tipoProducto;
    }
    //punto F
    if (banderaMayorPrecio)
    {
      mayorPrecio=precioBolsa;
      tipoMayorPrecio=tipoProducto;
      banderaMayorPrecio=false;
    }else if (mayorPrecio<precioBolsa)
    {
      mayorPrecio=precioBolsa;
      tipoMayorPrecio=tipoProducto;
    }




    precioBruto=precioBolsa*cantidadBolsas;
    acumuladorDePrecio+=precioBruto;
    acumuladorBolsas+=cantidadBolsas;
    sigue=prompt("desea seguir ingresando poductos? s/n")
  }
  if (acumuladorBolsas>= 10)
  {
    descuento=15;
  }else if( acumuladorBolsas>=30)
  {
    descuento= 25;
  }else
  {
    descuento=0;
  }
  precioFinal=acumuladorDePrecio*(1+descuento/100);

  document.write("el importe total bruto es: "+acumuladorDePrecio+"<br>");
  document.write("el importe total con descuento es si lo tiene es"+precioFinal+"<br>");
  document.write("el tipo on mas cantidad de bolsas es"+tipoMayorCantidadBolsas+"<br>");
  document.write("el tipo mas caro"+tipoMayorPrecio+"<br>");

}
*/