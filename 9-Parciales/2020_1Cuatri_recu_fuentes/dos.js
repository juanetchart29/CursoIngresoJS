/*
Nombre: Juan Pablo Etchart
Recu 2020 2 bis:  "El cine"
De un cine se deben ingresar una cantidad indeterminada 
de venta de entradas diaria, validando los
siguientes datos:
nombre de película, precio, cantidad de entradas, tipo(3D o 4D)
a)El nombre de la película más cara de tipo 4D.
b)Informar el precio total de la venta del día.
c)El nombre de la película con menos cantidad de entradas.
d)El tipo de pelicula más vista y la cantidad de entradas. 
e)El nombre de la pelicula más barata en 3D. 

function mostrar()
{
  let nombrePelicula;
  let precio;
  let cantidadDeEntradas;
  let tipo;

  let sigue;

  let banderaPeliculaMasCara4D;
  let nombrePeliculaMasCara4D;
  let precioMasCaro4D;

  let acumuladorPrecioTotal=0;

  let banderaPeliculaMenosCantidadEntrada;
  let nombrePeliculaMenosCantidadEntrada;
  let menorCantidadEntradas;

  let tipoMasVisto;
  let acumulador3D=0;
  let acumulador4D=0;
  let acumuladorFinal=0;
  
  let banderaMasBarata3D;
  let nombrePeliculaMasBarata3D;
  let precioMasBarato3D;

  sigue="s"

  banderaMasBarata3D=true;
  banderaPeliculaMasCara4D=true;
  banderaPeliculaMenosCantidadEntrada=true;

  while(sigue=="s")
  {
    nombrePelicula=prompt("ingrese el nmbre de la pelicula");
  
		while(!isNaN(parseInt(nombrePelicula)))
		{
			nombrePelicula=prompt("error,ingrese el nombre");
		}
    precio=parseInt(prompt("ingrese el precio unitario de la entrada"))
    while(isNaN(precio))
    {
      precio=parseInt(prompt("error,ingrese el precio unitario de la entrada"));
    }
    cantidadDeEntradas=parseInt(prompt("ingrese la cantidad de entradas"))
    while(isNaN(cantidadDeEntradas))
    {
      cantidadDeEntradas=parseInt(prompt("error,ingrese la cantidad de entradas"));
    }
    tipo=prompt("ingrese el tipo '3D'/'4D'");
    while(tipo!= "3D"&& tipo!= "4D")
    {
      tipo=prompt("error,ingrese el tipo '3D'/'4D'");
    }

    switch(tipo)
    {
      case "3D":
        if(banderaMasBarata3D)
        {
          nombrePeliculaMasBarata3D=nombrePelicula;
          precioMasBarato3D=precio;
          banderaMasBarata3D=false;
        }else if(precioMasBarato3D>precio)
        {
          nombrePeliculaMasBarata3D=nombrePelicula;
          precioMasBarato3D=precio;
        }
        acumulador3D+=cantidadDeEntradas;
        break;
      case "4D":
        if(banderaPeliculaMasCara4D)
        {
          nombrePeliculaMasCara4D=nombrePelicula;
          precioMasCaro4D=precio;
          banderaPeliculaMasCara4D= false;
        }else if(precioMasCaro4D<precio)
        {
          nombrePeliculaMasCara4D=nombrePelicula;
          precioMasCaro4D=precio;
        }
        acumulador4D+=cantidadDeEntradas
        break;
    }
    if(banderaPeliculaMenosCantidadEntrada)
    {
      nombrePeliculaMenosCantidadEntrada=nombrePelicula;
      menorCantidadEntradas=cantidadDeEntradas;
      banderaPeliculaMenosCantidadEntrada=false;
    }else if(menorCantidadEntradas<cantidadDeEntradas)
    {
      nombrePeliculaMenosCantidadEntrada=nombrePelicula;
      menorCantidadEntradas=cantidadDeEntradas;
    }
    
    acumuladorPrecioTotal+=precio*cantidadDeEntradas;

  
    sigue=prompt("desea ingresar mas datos: s/n")
  } 
  if(acumulador3D<acumulador4D)
  {
    acumuladorFinal=acumulador4D;
    tipoMasVisto="se vieron mas peliculas en 3 d"
  }else if(acumulador3D>acumulador4D)
  {
    tipoMasVisto="se vieron mas peliculas en 4d"
    acumuladorFinal=acumulador3D;
    
  }else 
  {
    tipoMasVisto=" se vieron igual cantidad de peliculas 3d y 4d"
  }
  
  document.write("el nombre de la peliculas mas cara 4d"+nombrePeliculaMasCara4D+"<br>");
  document.write("preciuo total de hoy"+acumuladorPrecioTotal+"<br>");
  document.write("el nombre de la pelicula con menos cantidad de entradas"+nombrePeliculaMenosCantidadEntrada+"<br>");
  document.write("el tipo de pelicula mas visto es"+tipoMasVisto+"con un total de "+acumuladorFinal+"<br>");
  document.write("el nombre de la pelicula mas barata es"+nombrePeliculaMasBarata3D+"<br>");
}*/
/* 

      Tipo validad("arena";"cal";"cemento")
          Cantidad de bolsas(0-300),
          Precio por bolsa (más de cero y menor a 10000 ),
          al terminar la compra el cliente accede a un descuento segun las bolsas en total
            Si compro más de 15 bolsas en total tenes 10% de descuento sobre el total a pagar.
            Si compro más de 45 bolsas en total tenes 30% de descuento sobre el total a pagar.
                a)
                El importe total a pagar , bruto sin descuento y...
                b)
                el importe total a pagar con descuento(solo si corresponde)
                d)
                Informar la bolsa mas cara de Cal y la mas barata de Cemento.
                e)
                Cuantas bolsas de arena se compraron en total, y el promedio por compra.

function mostrar()
{
  let tipoProductoIngresado;
	let precioBolsaIngresado;
	let cantidadBolsasIngresadas;

  let cantidadBolsas;
  let preciofinalDescuento;
  let precioFinal;
  let precioBrutoPorProducto;
  let contadorCompras;
  
  let banderaCal
  let bolsaMasCaraCal;
  let banderaCemento;
  let bolsaMasBarataCemento;

  let contadorBolsaArena;
  let promedioPorCompra;

  let sigue;

  banderaCal = true;
  banderaCemento = true;

  contadorBolsas = 0;
  contadorBolsaArena = 0;
  contadorCompras = 0;
  descuento = 0;

  precioFinal=0;

  sigue = "s"

  while(sigue == "s")
  {
    //validacion producto
    tipoProductoIngresado=prompt("ingrese el producto: 'arena';'cal';'cemento'")
    while(tipoProductoIngresado!="arena" && tipoProductoIngresado!="cal" && tipoProductoIngresado!="cemento" ) 
    {
      tipoProductoIngresado=prompt("Error,ingrese el producto valido: 'arena';'cal';'cemento'")
    }
    //validacion cantidad bolsas
		cantidadBolsasIngresadas = parseInt(prompt("ingrese la cantidad de bolsas"))
		while(cantidadBolsasIngresadas<0 || cantidadBolsasIngresadas>300)
		{
			cantidadBolsasIngresadas = parseInt(prompt("error,ingrese la cantidad de bolsas valida")); 
		}

    //validacion precio bolsa
    precioBolsaIngresado = parseInt(prompt("ingrese el precio de bolsas ingresadas"));
		while(precioBolsaIngresado<0|| precioBolsaIngresado>1000)
		{
			precioBolsaIngresado = parseInt(prompt("error,ingrese el precio unitario valido"));
		}
		
    //punto D
    switch(tipoProductoIngresado)
    {
      case "cal":
        if(banderaCal)
        {
          bolsaMasCaraCal=precioBolsaIngresado;
          banderaCal = false;
        } 
        else if(bolsaMasCaraCal < precioBolsaIngresado)
        {
          bolsaMasCaraCal = precioBolsaIngresado;
        }
        break;
      case "cemento":
        if(banderaCemento)
        {
          bolsaMasBarataCemento = precioBolsaIngresado;
          banderaCemento = false;
        }
        else if(bolsaMasBarataCemento > precioBolsaIngresado)
        {
          bolsaMasBarataCemento = precioBolsaIngresado;
        }
        break;
      case "arena":
        contadorBolsaArena += cantidadBolsasIngresadas;
        break;
      
    }// fin del switch

    precioBrutoPorProducto = cantidadBolsasIngresadas * precioBolsaIngresado
    
    precioFinal += precioBrutoPorProducto
    
    cantidadBolsas += cantidadBolsasIngresadas
    contadorCompras += 1;
    sigue=prompt("desea seguir ingresando productoS   's'/'n'");
    


  }// termino el while

  if(cantidadBolsas>=15 && cantidadBolsas<45)
  {
    descuento=15;
  }
  else if (cantidadBolsas>=45)
  {
    descuento=30;
  }
  promedioPorCompra = precioFinal / contadorCompras;
  preciofinalDescuento = precioFinal+precioFinal*(descuento/100);

  document.write("el import total a pagar bruto"+precioFinal+"<br>");
  document.write("eimporte total a pagar con descuento"+preciofinalDescuento+"<br>");
  document.write("la bolsa mas cara de cal $"+bolsaMasCaraCal+"<br>");
  document.write("la bolsa mas barata de cemento es $"+bolsaMasBarataCemento+"<br>");
  document.write("la cantidad de bolsas de arena es de"+contadorBolsaArena+"<br>");
  document.write("el promedio por compra es de $"+promedioPorCompra+"<br>")
} */
