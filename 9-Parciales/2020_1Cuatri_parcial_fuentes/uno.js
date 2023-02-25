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
c) Cuántas unidades de jabones hay en total */
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

  let banderaMasCantidad;
  let productoMasUnidades;
  let mayorCantidad;
  let contadorAlcohol;
  let acumuladorAlcohol;
  let acumuladorJabon;
  let contadorJabon;
  let contadorBarbijo;
  let acumuladorBarbijo;
  let promedioMasUnidades;
  
  contadorAlcohol=0;
  contadorBarbijo=0;
  contadorJabon=0;
  acumuladorBarbijo=0;
  acumuladorJabon=0;
  acumuladorAlcohol=0;

  banderaBaratoAlcohol = true;
  banderaMasCantidad = true;

  for( let i = 0; i<5; i++)
  {
    //impot tipOProducto
    tipoProducto=prompt('ingrese el tipo de producto: "barbijo" , "jabon" o "alcohol"');
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
        if(banderaBaratoAlcohol )
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
    if (banderaMasCantidad)
    {
      mayorCantidad = cantidadProducto;
      productoMasUnidades = tipoProducto;
      banderaMasCantidad = false;  
    } else if (mayorCantidad<cantidadProducto)
    {
      mayorCantidad = cantidadProducto;
      productoMasUnidades = tipoProducto;
    }
  }
  switch(productoMasUnidades)
  {
    case "jabon":
      promedioMasUnidades=acumuladorJabon/contadorJabon;
      break;
    case "barbijo":
      promedioMasUnidades=acumuladorBarbijo/contadorBarbijo;
      break
    case "alcohol":
      promedioMasUnidades=acumuladorAlcohol/contadorAlcohol;
      break;
  }
document.write("el mas barato de los alcoholes hay: "+cantidadBaratoAlcohol+fabricanteBaratoAlcohol+"<br>");
document.write("de el tipo con mas unidades hay "+promedioMasUnidades+"<br>");
document.write("cantidad de jabones hay"+contadorJabon+"<br>");

}

