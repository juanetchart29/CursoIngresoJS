/* 
Nombre: Juan Pablo Etchart
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
*/
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
}