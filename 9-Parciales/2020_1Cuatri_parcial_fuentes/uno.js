// ejercicios reechos manera del parcial
// ejercicio parcial 1 biss
/* arcial 1 2020 bis: /"Super chino" 
Se pide el ingreso de mercadería de un supermercado , 
hasta que el usuario quiera,se pide :
tipo(limpieza , comestible , otros)solo estos tres tipos
nombre del producto
importe del producto (no mayor a 1000 pesos)
procedencia(importado, nacional, elaborado)
Peso (no mayor a 30 kilos)
informar SOLO SI HAY
// a) el NOMBRE del mas pesado de los comestibles
// b) el NOMBRE del mas caro de todos los productos
// c) el NOMBRE del mas barato de los elaborados
// d)el tipo de mercadería que mas aparece
// e)el porcentaje de productos elaborados por sobre el total
// f) el promedio de pesos por cada tipo ingresado*/ 
function mostrar()
{
  let tipoProducto;
  let nombre;
  let precio;
  let procedencia;
  let peso;
  let sigue="s";

  let nomPesado;
  let pesoPesado;

  let banderaBarato=true;
  let nomBarato;
  let precioBarato;
  
  let nomCaro;
  let precioCaro;

  let contLimpieza=0;
  let contComestible=0;
  let contOtros=0;

  let acumPrecioLim=0;
  let acumPrecioCom=0;
  let acumPrecioOtro=0;
  
  let tipoMasAparece;
  let porcentElaborados;
  let contElaborados=0;

  let promedioComestible;
  let promedioLimpieza;
  let promedioOtro;

  while(sigue == "s")
  {
    //----------------------------ingreso y validacion
    tipoProducto=prompt("ingrese el tipo de producto limpieza , comestible , otros");
    while(tipoProducto!= "limpieza" && tipoProducto!= "comestible" && tipoProducto!="otros")
    {
      tipoProducto=prompt("error,ingrese el tipo de producto limpieza , comestible , otros");
    }
    nombre=prompt("ingrese el nombre del producto");
    while(!isNaN(parseInt(nombre)))
    {
        nombre=prompt("error,ingrese un nombre  valido");
    }
    precio=parseInt(prompt("ingrese un  iporte"));//entero
    while(isNaN(precio)|| precio>1000)
    {
        precio=parseInt(prompt("Error,ingrese un iporte valido"));
    }//fin del while
    procedencia=prompt("ingrese una procedencia: importado, nacional, elaborado")
    while(procedencia!= "importado" && procedencia!= "nacional" && procedencia!="elaborado")
    {
      procedencia=prompt("error,ingrese el tipo de producto importado , nacional , elaborado");
    }
    peso=parseInt(prompt("ingrese la peso"))
    while(isNaN(peso) || peso>30)
    {
        peso=parseInt(prompt("error, ingrese una peso valida"))
    }

    //---------------------logica
        // b) el NOMBRE del mas caro de todos los productos
    if((contComestible==0 && contLimpieza==0 && contOtros==0)||precioCaro<precio)
    {
      nomCaro=nombre;
      precioCaro=precio
    }
        
    switch(tipoProducto)
    {
      case "comestible":
        // a) el NOMBRE del mas pesado de los comestibles
        if(contComestible==0||pesoPesado<peso)
        {
          nomPesado=nombre;
          pesoPesado=peso;
        }
        acumPrecioCom+=precio;
        contComestible+=1;
        break;
      case "limpieza":
        acumPrecioLim+=precio;
        contLimpieza+=1;
        break;
      case "otros":
        acumPrecioOtro+=precio;
        contOtros+=1;
        break;
    }
     // c) el NOMBRE del mas barato de los elaborados
    if(procedencia=="elaborado")
    {
      contElaborados+=1;
      if(banderaBarato || precioBarato>precio)
      {
        nomBarato=nombre;
        precioBarato=precio;
        banderaBarato=false;
      }
    }

    // //----------------------sigue 
    sigue=prompt("desea seguir ingresando? s/n");
  }//fin while --------------------------------------------------------------
    // d)el tipo de mercadería que mas aparece
  if(contLimpieza>contComestible && contLimpieza>contOtros)
  {
      tipoMasAparece="limpieza"
  }else if(contComestible>contOtros)
  {
      tipoMasAparece="comestible"
  }else 
  {
      tipoMasAparece="Otros"
  }
    // e)el porcentaje de productos elaborados por sobre el total
  
  porcentElaborados=contElaborados*100/(contComestible+contLimpieza+contOtros)
  if(porcentElaborados==0)
  {
    console.log("no se ingresaron productos 'elaborados' ");
  }else 
  {
    console.log("el promedio de los elaborados es:  "+porcentElaborados);
  }
  // f) el promedio de pesos por cada tipo ingresado
  promedioComestible=acumPrecioCom/contComestible;
  promedioLimpieza=acumPrecioLim/contLimpieza;
  promedioOtro=acumPrecioOtro/contOtros;
  if(contComestible!=0)
  {
    console.log("el nombre del mas pesado de los comestibles  es: "+nomPesado);
    console.log("el promedio de pesos en los comestibles es de: "+promedioComestible);
  }else 
  {
    console.log("no se ingresaron del tipo comestible");
  }
  if(contLimpieza!=0)
  {
    console.log("el promedio de limpieza es: "+promedioLimpieza);
  }else
  {
    console.log("no se ingresaron del tipo limpieza");
  }
  if(contOtros!=0)
  {
    console.log("el promedio del tipo otros es: "+promedioOtro);
  }else
  {
    console.log("no se ingresaron del tipo otro");
  }
  console.log("el nombre del mas caro de todos los productos es: "+nomCaro);
  console.log("el tipo de mercaderia que mas aparece es: "+tipoMasAparece);

}

// a) el NOMBRE del mas pesado de los comestibles
// b) el NOMBRE del mas caro de todos los productos
// c) el NOMBRE del mas barato de los elaborados
// d)el tipo de mercadería que mas aparece
// e)el porcentaje de productos elaborados por sobre el total
// f) el promedio de pesos por cada tipo ingresado





























/* arcial 1 2020 bis: /"Super chino" 
Se pide el ingreso de mercadería de un supermercado , 
hasta que el usuario quiera,se pide :
tipo(limpieza , comestible , otros)solo estos tres tipos
nombre del producto
precio del producto (no mayor a 1000 pesos)
procedencia(importado, nacional, elaborado)
Peso (no mayor a 30 kilos)
informar SOLO SI HAY
a) el NOMBRE del mas pesado de los comestibles
b) el NOMBRE del mas caro de todos los productos
c) el NOMBRE del mas barato de los elaborados
d)el tipo de mercadería que mas aparece
e)el porcentaje de productos elaborados por sobre el total
f) el promedio de pesos por cada tipo ingresado/ 

function mostrar()
{
  let tipoProducto;
  let nombreProducto;
  let importeProducto;
  let procedenciaProducto;
  let pesoProducto;

  let banderaMasPesadoComestible=true;;
  let pesoMasPesadoComestible;
  let nombreMasPesadoComestible;

  let banderaMasCaroTotal=true;;
  let importeMasCaro;
  let nombreMasCaro;

  let banderaMasBaratoElaborado=true;;
  let precioMasBaratoElaborado;
  let nombreMasBaratoElaborado;

  let tipoMasComprado;
  let cantidadMasComprada=0;
  let contadorLimpieza=0;
  let contadorComestible=0;
  let contadorOtro=0;

  let porcetajeProductosElaborados;
  let contadorElaborado=0;

  let acumuladorImporteLimpieza=0;
  let acumuladorImporteComestible=0;
  let acumuladorImporteOtro=0;
  let promedioLimpieza;
  let promedioComestible;
  let promedioOtro;

  let contadorVueltas=0;
  let sigue="s"
  
  sigue="s";

  while(sigue == "s")
  {
    tipoProducto=prompt('ingrese el tipo de producto: "limpieza" , "comestible" o "otro"');
    while(tipoProducto!="limpieza" && tipoProducto!= "comestible" && tipoProducto!= "otro")
    {
        tipoProducto=prompt('error,ingrese el tipo de producto: "limpieza" , "comestible u "otro"');
        
    }
    nombreProducto=prompt("ingrese el nombre del producto");
    while(!isNaN(parseInt(nombreProducto)))
    {
      nombreProducto=prompt("eroor,ingrese el nombre del producto valido");
    }

    importeProducto=parseInt(prompt("ingrese un numero"));//entero
    while(isNaN(importeProducto)|| importeProducto>1000)
    {
        importeProducto=parseInt(prompt("Error,ingrese un numero valido"));
    }//fin del while
    
    procedenciaProducto=prompt("procedencia del producto?(importado, nacional, elaborado)");
    
    while(procedenciaProducto!="importado"&&procedenciaProducto!="nacional"&& procedenciaProducto!="elaborado")
    {
      procedenciaProducto=prompt("error,procedencia del producto?(importado, nacional, elaborado)");
      
    }
    pesoProducto=parseInt(prompt("ingrese el pesoProducto "));
    while(isNaN(pesoProducto) ||  pesoProducto <= 30)
    {
        pesoProducto=parseInt(prompt("Error,ingrese el peso del producto"));
    }//fin del while
    if (banderaMasPesadoComestible)
    {
      pesoMasPesadoComestible=pesoProducto;
      nombreMasPesadoComestible=nombreProducto;
      banderaMasPesadoComestible=false;
    }else if(pesoMasPesadoComestible<pesoProducto)
    {
      pesoMasPesadoComestible=pesoProducto;
      nombreMasPesadoComestible=nombreProducto;
    }
    
    if (banderaMasCaroTotal)
    {
      nombreMasCaro=nombreProducto;
      importeMasCaro=importeProducto;
      banderaMasCaroTotal=false;
    }else if(importeMasCaro<importeProducto)
    {
      nombreMasCaro=nombreProducto;
      importeMasCaro=importeProducto;
    }
    switch(procedenciaProducto)
    {
      case"elaborado":
        if(banderaMasBaratoElaborado)
        {
          precioMasBaratoElaborado=importeProducto;
          nombreMasBaratoElaborado=nombreProducto;
          banderaMasBaratoElaborado=false;  
        }else if(precioMasBaratoElaborado>importeProducto)
        {
          precioMasBaratoElaborado=importeProducto;
          nombreMasBaratoElaborado=nombreProducto;
        }
        contadorElaborado+=1
        break;
    }  

    switch(tipoProducto)
    {
      case "comestible":
        contadorComestible+=1;
        acumuladorImporteComestible+=importeProducto;
        break;
      case "limpieza":
        contadorLimpieza+=1;
        acumuladorImporteLimpieza+=importeProducto;
        break;

      case "otro":
        contadorOtro+=1;
        acumuladorImporteOtro+=importeProducto;
        break;
    }
    contadorVueltas+=1;
    sigue=prompt("desea seguir ingresando poductos? s/n");

    
  }//fin del while

  if(contadorOtro>cantidadMasComprada)
  {
    cantidadMasComprada=contadorOtro;
    tipoMasComprado="otro";
  }else if(contadorLimpieza>cantidadMasComprada)
  {
    cantidadMasComprada=contadorLimpieza;
    tipoMasComprado="limpieza";
  }else if(contadorComestible>cantidadMasComprada)
  {
    cantidadMasComprada=contadorComestible;
    tipoMasComprado="comestible";
  }
  porcetajeProductosElaborados=contadorVueltas/contadorElaborado*100
  promedioLimpieza=acumuladorImporteLimpieza/contadorLimpieza;
  promedioComestible=acumuladorImporteComestible/contadorComestible;
  promedioOtro=acumuladorImporteOtro/contadorOtro;
  
  document.write("Nombre mas pesado de los comestibles"+nombreMasPesadoComestible+"<br>");
  document.write("nombre mas caro de todos los productos"+nombreMasCaro+"<br>");
  document.write("nombre mas batato de los elaborados"+nombreMasBaratoElaborado+"<br>");
  document.write("tipo de mercaderia que mas aparece: "+tipoMasComprado+"<br>");
  document.write("el porcentaje de productor elaborados sobre el total"+porcetajeProductosElaborados+"<br>"); 
  document.write("el promedio de pesos por un producto de limieza"+promedioLimpieza+"<br>"); 
  document.write("el promedio de pesos por un producto comestible"+promedioComestible+"<br>"); 
  document.write("el promedio de pesso por un producto otro"+promedioOtro+"<br>"); 
  
}


*/


/*
Nombre: Juan Pablo Etchart
Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
b) Del tipo con mas unidades, el promedio por compra
c) Cuántas unidades de jabones hay en total 
function mostrar()
{
  let tipoProducto;
  let precioProducto;
  let cantidadProducto;
  let MarcaProducto;
  let fabricanteProducto;


  let banderaBaratoAlcohol;
  let precioBaratoAlcohol;
  let cantidadBaratoAlcohol;
  let fabricanteBaratoAlcohol;

  
   
  let mayorCantidad=0;
  let contadorAlcohol;
  let acumuladorAlcohol;
  let acumuladorJabon;
  let contadorJabon;
  let contadorBarbijo;
  let acumuladorBarbijo;
  let promedio;
  
  contadorAlcohol=0;
  contadorBarbijo=0;
  contadorJabon=0;
  acumuladorBarbijo=0;
  acumuladorJabon=0;
  acumuladorAlcohol=0;

  banderaBaratoAlcohol = true;
  banderaMasCantidad = true;

  for( let i = 0; i<3; i++)
  {
    //impot tipOProducto
    tipoProducto=(prompt('ingrese el tipo de producto: "barbijo" , "jabon" o "alcohol"'));
    
    while(tipoProducto!="jabon" && tipoProducto!= "barbijo" && tipoProducto!= "alcohol")
    {
      tipoProducto=prompt('error,ingrese el tipo de producto: "barbijo" , "jabon" o "alcohol"');
    }
    // input precioProducto
    precioProducto=parseInt(prompt("ingrese el precio del producto"));//flotante
    while(isNaN(precioProducto) || precioProducto<100 || precioProducto>300)
    {
      precioProducto=parseInt(prompt("Error,ingrese un precio valido"));
    }
    //input cantidadProducto
    cantidadProducto=parseInt(prompt("ingrese la cantidad del producto"));//flotante
    while(isNaN(cantidadProducto) || cantidadProducto<0 || cantidadProducto>1000)
    {
      cantidadProducto=parseInt(prompt("Error,ingrese una cantidad valida"));
    }
    //input marca
    MarcaProducto=prompt("ingrese la marca del producto");
    fabricanteProducto=prompt("ingrese el fabricante del prodcuto");


    switch(tipoProducto)
    {
      case "alcohol":
        if(banderaBaratoAlcohol)
        {
          cantidadBaratoAlcohol=cantidadProducto;
          precioBaratoAlcohol = precioProducto;
          banderaBaratoAlcohol = false;
          fabricanteBaratoAlcohol = fabricanteProducto;
          
        }else if (precioBaratoAlcohol<precioProducto)
        {
          precioBaratoAlcohol = precioProducto;
          cantidadBaratoAlcohol=cantidadProducto;
          fabricanteBaratoAlcohol = fabricanteProducto;
        }
        contadorAlcohol+=1;
        acumuladorAlcohol+=cantidadProducto;
        break;
      case "barbijo":
        contadorBarbijo+=1;
        acumuladorBarbijo+=cantidadProducto;
        break;
      case "jabon":
        contadorJabon+=1;
        acumuladorJabon+=cantidadProducto;
        break;
    }
  }

  if(acumuladorAlcohol>mayorCantidad)
  {
    mayorCantidad=acumuladorAlcohol;
    promedio=mayorCantidad/contadorAlcohol;

  }else if(acumuladorBarbijo>mayorCantidad)
  {
    mayorCantidad=acumuladorBarbijo;
    promedio=
  }else if(acumuladorJabon>mayorCantidad)
  {
    mayorCantidad=acumuladorJabon;
    promedio=mayorCantidad/contadorJabon;
  }


  document.write("el mas barato de los alcoholes hay: "+cantidadBaratoAlcohol+fabricanteBaratoAlcohol+"<br>");
	document.write("de el tipo con mas unidades hay "+promedio+"<br>");
	document.write("cantidad de jabones hay"+acumuladorJabon+"<br>");
} */