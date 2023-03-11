/*
Juan Pablo Etchart
Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'mostrar'

function mostrar()
{
	// las variables en javascript se pueden empezar con let o var
	// en este curso vamos a usar let
	let nombrePersona=prompt("Ingrese su Nombre ");
	
	alert(nombrePersona);   
}
*/
/*
//concatenar dos variables 
function mostrar(){
	let nombrePersona
	nombrePersona=prompt("ingrese su nombre")
	let apellidoPersona
	apellidoPersona=prompt("ingrese su apellido")
	alert("el nombre completo es: "+ nombrePersona +" "+ apellidoPersona)
}
*/
/* 2. Una librería que se especializa en venta de libros importados desea calcular ciertas métricas en base a las ventas de sus productos (No se sabe cuántos).
Se ingresa de cada venta:
Título del libro
Género: (ciencia ficción – Drama – Terror)
Material del libro (rústica – tapa dura)
Importe (No pueden ser números negativos ni mayor a los 30000)
Se pide:                          	
El más barato de los libros de drama con su importe.
Qué porcentaje de cada género se vendió.
Informar el título del primer libro de drama que se vendió.
 */
/* function mostrar()
{
	let titulo;
	let genero;
	let material;
	let importe;
	let precioBarato;
	let nombreMasBarato;
	let porcentajeCiencia;
	let porcentajeTerror;
	let porcentajeDrama;
	let tituloPrimerDrama;

	let contDrama=0;
	let contCienciaFiccion=0;
	let contTerror=0;

	let sigue="s";
	while(sigue == "s")
	{
		//----------------------------ingreso y validacion
		titulo=prompt("Ingrese el título del libro");
		while(!isNaN(parseInt(titulo)))
		{
			titulo=prompt("error,Ingrese el título del libro");
		}	
		genero=prompt("ingrese un genero: ciencia ficción – Drama – Terror")
		while(genero!="ciencia ficcion" && genero!="drama" && genero!="terror")
		{
			genero=prompt("error, ingrese valido")
		}//fin validacion
		material=prompt("ingrese un material: rústica – tapa dura")	
		while(material!="rústica" && material!="tapa dura")
		{
			material=prompt("error,ingrese un material: rústica – tapa dura")
		}

		importe=parseInt(prompt("ingrese el importe"))
		while(isNaN(importe) || importe<0 || importe>3000)
		{
			importe=parseInt(prompt("error, ingrese una importe valido"))
		}
		
		//---------------------logica
		switch(genero)
		{
			case "ciencia ficcion":
				contCienciaFiccion+=1;
				break;
			case "drama":
				if(contDrama==0)
				{	
					tituloPrimerDrama=titulo;
					precioBarato=importe;
					nombreMasBarato=nombre;
				}else if(precioBarato>importe)
				{
					precioBarato=importe;
					nombreMasBarato=nombre;
				}
				contDrama+=1
				break;
			case "terror":
				contTerror+=1;
				break;
		}
		
// 		El más barato de los libros de drama con su importe.
// Qué porcentaje de cada género se vendió.
// Informar el título del primer libro de drama que se vendió.
		//----------------------sigue 
		sigue=prompt("desea seguir ingresando? s/n");
	}//fin while
	if(contCienciaFiccion!=0)
	{
		
	}
	porcentajeDrama=contDrama/(contCienciaFiccion+contTerror+contDrama)*100;
	porcentajeTerror=contTerror/(contCienciaFiccion+contTerror+contDrama)*100;
	porcentajeCiencia=contCienciaFiccion/(contCienciaFiccion+contTerror+contDrama)*100;
	console.log("el mas barato d elos liibreo s drama es: "+nombreMasBarato);
	console.log("el porcentaje de  drama es: "+porcentajeDrama);
	console.log("el porcentaje de terror es: "+porcentajeTerror);
	console.log("el porcentaje de ciencia ficcion es: "+porcentajeCiencia);
	console.log("el titulo del primer libro de drama que se vendio es: "+tituloPrimerDrama);
} */
//2 

/*
Parador Atalaya

Para la nueva sucursal de Atalaya a la vuelta de UTN Avellaneda, es necesario 
llevar un registro de la venta diaria de cafés,
medialunas y churros, esto durante las siguientes 12 horas.
Para eso, al momento de cada venta, se debe ingresar:

Nombre del cliente a retirar
Tipo (Café / Medialunas /Churros) 
Cantidad.

El precio por unidad de cada producto es:
Café $100.
Medialunas $60.
Churros $50.
Si compra 2 docenas de Medialunas o Churros tendrá un 30% de descuento.
Si compra 1 docena Medialunas o Churros tendrá un 20% de descuento.
Si compra 10 Medialunas o Churros tendrá un 10% de descuento.
Si compra 5 Medialunas o Churros y un café tendrá un 5% de descuento.

Informes:

Cuantas Medialunas se compraron durante toda la jornada.
Cuál fue el producto con más unidades vendidas.
Nombre del cliente, y tipo de producto con mayor cantidad de compras
En caso de haber excedido el monto de $1300 sumarle un 20% de impuestos.
Informar cuál fue el producto menos vendido*/


/* function mostrar()
{
	let tipo;
	let nombre; 
	let cantidad;

	let importe;
	let precioTotal;
	let precioFinal=0;

	let acumMedialunas=0;
	let acumChurros=0;
	let acumCafe=0;

	let contMedialunas=0;
	let contCafe=0;
	let contChurros=0;
	
	let mayorCantidad;
	
	let tipoMayorCompra;

	let aumento=0;

	let productoMenosVendido;

	let sigue="s";
	while(sigue == "s")
	{
		//----------------------------ingreso y validacion
		tipo=prompt("ingrese: Cafe / Medialunas /Churros")
		while(tipo!="Cafe" && tipo!="Medialunas" && tipo!="Churros" )
		{
			tipo=prompt("error, ingrese un tipo valido: Cafe / Medialunas /Churros")
		}//fin validacion

		nombre=prompt("ingrese el nombre");
		while(!isNaN(parseInt(nombre)))
		{
			nombre=prompt("error,ingrese un nombre  valido");
		}
		cantidad=parseInt(prompt("ingrese la cantidad"))
		while(isNaN(cantidad) || cantidad<0 || cantidad>100)
		{
			cantidad=parseInt(prompt("error, ingrese una cantidad valida"))
		}
		//--------------------
		switch(tipo)
		{
// 			Si compra 2 docenas de Medialunas o Churros tendrá un 30% de descuento.
// Si compra 1 docena Medialunas o Churros tendrá un 20% de descuento.
// Si compra 10 Medialunas o Churros tendrá un 10% de descuento.
// Si compra 5 Medialunas o Churros y un café tendrá un 5% de descuento
			case "Cafe":
				importe=100;
				contCafe+=1;
				acumCafe+=cantidad;
				break;
			case "Churros":
				if(cantidad==24)
				{
					aumento=-30;
				}else if(cantidad==12)
				{
					aumento=-20
				}else if(cantidad==10)
				{
					aumento=-10
				}else if(cantidad==5)
				{
					aumento=-5;
				}
				acumChurros+=cantidad;
				contChurros+=1;
				importe=50;
				break;
			case "Medialunas":
				// 	Cuantas Medialunas se compraron durante toda la jornada.
				if(cantidad==24)
				{
					aumento=-30;
				}else if(cantidad==12)
				{
					aumento=-20
				}else if(cantidad==10)
				{
					aumento=-10
				}else if(cantidad==5)
				{
					aumento=-5;
				}
				contMedialunas+=1;
				acumMedialunas+=cantidad;
				importe=60;
				break;
		}
		precioTotal=importe*cantidad*(1+aumento/100);
		if(precioTotal> 1300)
		{
			aumento=20
			precioFinal+=precioTotal*(1+aumento/100);
		
		}
		
		//----------------------sigue 
		sigue=prompt("desea seguir ingresando? s/n");
	}//fin while--------------------------------
	// Cuál fue el producto con más unidades vendidas.
	if(acumCafe>acumMedialunas && acumCafe>acumChurros)
	{
		mayorCantidad="Cafe";
	}else if(acumMedialunas>acumChurros)
	{
		mayorCantidad="Medialunas";
	}else 
	{
		mayorCantidad="Churros";
	}

	if(acumCafe>acumMedialunas && acumCafe>acumChurros)
	{
		mayorCantidad="Cafe";
	}else if(acumMedialunas>acumChurros)
	{
		mayorCantidad="Medialunas";
	}else 
	{
		mayorCantidad="Churros";
	}



	if(contCafe<contMedialunas && contCafe<contChurros)
	{
		productoMenosVendido="Cafe";
	}else if(contMedialunas<contChurros)
	{
		productoMenosVendido="Medialunas";
	}else 
	{
		productoMenosVendido="Churros";
	}
	console.log("la cantidad de mediallunas que se compraron durante la jornada son: "+acumMedialunas);
	console.log("el producto con mas unidaddes vendidas: "+mayorCantidad);
	console.log("el tipo de producto con mayor cantidad de compras es: "+tipoMayorCompra);
	console.log("el total del dia fue: "+precioFinal)
	console.log("el producto menos vendido fue: "+productoMenosVendido);	

// 	Cuantas Medialunas se compraron durante toda la jornada.
// Cuál fue el producto con más unidades vendidas.
// Nombre del cliente, y tipo de producto con mayor cantidad de compras
// En caso de haber excedido el monto de $1300 sumarle un 20% de impuestos.
// Informar cuál fue el producto menos vendido
} */
//----------------------
/*
3. Se debe llevar a cabo el registro de ingresos a un parque de diversiones.
Dicho parque se caracteriza por su variedad de montañas rusas. 
Se pide el ingreso del nombre del visitante, la edad (mayores a 12 años), 
tipo de pasaporte (sin pasaporte, convencional, premium), 
tipo de montaña rusa (Fantasma, Acuática, Adrenalina100%). 
Tener en cuenta:
El valor de acceso a todas las montañas rusas es de $500.
Los visitantes sin pasaporte, abonan al momento de subir al juego. 
Los visitantes con pasaporte convencional, abonan el 30% del valor de la entrada.
Los visitantes con pasaporte premium, no abonan nada.
Se necesita saber: 
La recaudación en efectivo por las tres montañas rusas.
Porcentaje de visitantes que se subieron a cada montaña rusa.
Cuál es el tipo de pasaporte que mas se utilizo (incluyendo los visitantes sin pasaporte)*/
/*  function mostrar()
{
	let nombre;
	let edad;
	let pasaporte;
	let montaña;
	
	let acceso=500;
	let precio;
	let recaudacionTotal=0;
	
	let contFantasma=0;
	let contAcuatica=0;
	let contAdrenalina=0;
	
	let porcentajeFantasma;
	let porcentajeAcuatica;
	let porcentajeAdrenalina;

	let mayoPasaporte;

	let contSinPas=0;
	let contPremium=0;
	let contConvencional=0;


	let sigue="s";
	while(sigue == "s")
	{
		//----------------------------ingreso y validacion
		nombre = prompt("Ingrese el nombre del visitante");
		while(!isNaN(parseInt(nombre)))
    	{
        	nombre=prompt("error,ingrese un nombre  valido");
    	}
		
		edad=parseInt(prompt("ingrese una edad"));
        while(isNaN(edad) || edad < 12 || edad > 123)
        {
            edad=parseInt(prompt("Error,ingrese una edad valida"));
        }//fin del while

		montaña=prompt("ingrese una montaña rusa:Fantasma, Acuática, Adrenalina100% ")
		while(montaña!="Fantasma" && montaña!="Acuática" && montaña!="Adrenalina100%")
		{
			montaña=prompt("error, ingrese valido una montaña rusa:Fantasma, Acuática, Adrenalina100%")
		}//fin validacion

		pasaporte=prompt("ingrese el pasaporte: sin pasaporte, convencional, premium")
		while(pasaporte!="sin pasaporte" && pasaporte!="convencional" && pasaporte!="premium")
		{
			pasaporte=prompt("error, ingrese el pasaporte: sin pasaporte, convencional, premium")
		}//fin validacion
		//---------------------logica

		switch(pasaporte)
		{
			case "convencional":
				precio = acceso*0,7;
				contConvencional+=1;
				break;

			case "premium":
				precio = 0;
				contPremium+=1;
				break;
			case "sin pasaporte":
				precio=acceso;
				contSinPas+=1;
				break;
		}
		// A	La recaudación en efectivo por las tres montañas rusas.
		recaudacionTotal+=precio
		//----------------------sigue 
		sigue=prompt("desea seguir ingresando? s/n");
	}//fin while
	if (recaudacionTotal!=0)
	{
		console.log("la recaudacion total en efectivo: "+recaudacionTotal);
	}else 
	{
		console.log("la recaudacion total es 0 entonces todos los ingresantes tenian pasaporte premium");
	}
	
	// B Porcentaje de visitantes que se subieron a cada montaña rusa.
	porcentajeFantasma=contFantasma/(contAcuatica+contAdrenalina+contFantasma)*100;
	porcentajeAdrenalina=contAdrenalina/(contAcuatica+contAdrenalina+contFantasma)*100;
	porcentajeAcuatica=contAcuatica/(contAcuatica+contAdrenalina+contFantasma)*100;
	if(contAcuatica!=0)
	{
		console.log("el porcentaje de gente que se subio a acuatica es: "+porcentajeAcuatica)
		
		console.log("el porcentaje de gente que se subio a ")
	}else 
	{
		console.log("no se subieron a la montaña acuatica");
	}
	if(contAdrenalina!=0)
	{
		console.log("el porcentaje de gente que se subio a Adrenalina%100: "+porcentajeAdrenalina)
	}else 
	{
		console.log("no se subieron a la montaña Adrenalina");
	}
	if(contFantasma!=0)
	{
		console.log("el porcentaje de gente que se subio a fantasma "+porcentajeFantasma)
	}else 
	{
		console.log("no se subieron a la montaña Fantasma");
	}
	//C Cuál es el tipo de pasaporte que mas se utilizo (incluyendo los visitantes sin pasaporte)
	if(contSinPas>contPremium && contSinPas>contConvencional)
	{
		mayoPasaporte="contSinPas";
	}else if(contPremium>contConvencional)
	{
		mayoPasaporte="contPremium";
	}else 
	{
		mayoPasaporte="contConvencional";
	}
	console.log("el tipo de pasaporte que mas se utilizo es el: "+mayoPasaporte);
// A	La recaudación en efectivo por las tres montañas rusas.
// B Porcentaje de visitantes que se subieron a cada montaña rusa.

// conque me queod ? validar todo, ojo con con *0.3
}  */
/*---------------------------------------------
En una carga indefinida de datos (hasta que el usuario quiera) 
se desea llevar a cabo el registro diario de una granja de minería en Bitcoin y Ethereum.
Se requieren los siguientes datos:
Nombre de la criptomoneda (VALIDAR EL INGRESO solo de BTC o ETH).
Cantidad de BTC o ETH minado ese día - Número positivo.
Cotización diaria en USD - Número positivo inclusive 0.
INFORMAR
A) Nombre y cantidad de la criptomoneda más minada.
B) Nombre de la criptomoneda que mayor cotización tuvo.
C) Cantidad total de ingreso bruto en USD de cada criptomoneda.
D) Sabiendo que el coste de electricidad para:
BTC es de un 7% y para ETH es un 4% calcular el ingreso total neto en USD.
E) Convertir el ingreso neto en ARS solo para ETH. Sabiendo que la cotización de 1 USD a ARS es de $337.
Si el ingreso supera los 100.000 ARS calcular impuesto de AFIP del 21% e informar
"El ingreso neto por ETH es de X1 pesos y se descontó X2 pesos de AFIP".
Siendo .X1 el neto en ARS y X2 el impuesto aplicado.
*/
function mostrar()
{
	let cripto;
	let cantidad;
	let cotizacion;
	
	let acumEth=0;
	let acumBtc=0;

	let nombreMayorCotizada;
	let mayorCotizacion;

	let totalBrutoBtc;
	let totalBrutoEth;

	let costeElectricidadBtc=7;
	let totalNetoBtc;
	let totalNetoEth;
	let totalNetoBtcPesos;
	let totalNetoEthPesos;
	let costeElectricidadEth=4;

	let precioDolar=337;

	let impuesto=0;
	
	let sigue="s";
	while(sigue == "s")
	{
		//----------------------------ingreso y validacion
		cripto=prompt("ingrese la cripto: 'eth' - 'btc'")
		while(cripto!="eth" && cripto!="btc")
		{
			cripto=prompt("error, ingrese valido")
		}//fin validacion
		cantidad=parseInt(prompt("ingrese la cantidad de "+cripto))
		while(isNaN(cantidad) || cantidad<0 || cantidad>1000000)
		{
			cantidad=parseInt(prompt("error, ingrese una cantidad valida"))
		}
		cotizacion=prompt("ingrese la cotización de "+cripto)
		while(isNaN(cotizacion) || cotizacion<0 || cotizacion>1000000)
		{
			cotizacion=prompt("error;ingrese la cotización de "+cripto)
		}
		//---------------------logica
// Si el ingreso supera los 100.000 ARS calcular impuesto de AFIP del 21% e informar
		if((totalBrutoBtc*precioDolar)>100000 || (totalBrutoEth*precioDolar)>100000)

// B) Nombre de la criptomoneda que mayor cotización tuvo.
		
		if((acumBtc+acumEth)==0 || mayorCotizacion<cotizacion)
		{
			mayorCotizacion=cotizacion;
			nombreMayorCotizada=cripto;
		}
		switch(cripto)
		{// C) Cantidad total de ingreso bruto en USD de cada criptomoneda.
			case "btc":
				acumBtc+=cantidad;
				totalBrutoBtc=cantidad*cotizacion;
				break;
			case "eth":
				acumEth+=cantidad;
				totalBrutoEth=cantidad*cotizacion
				break;
		}
		// Si el ingreso supera los 100.000 ARS calcular impuesto de AFIP del 21% e informar
		if((totalBrutoBtc*precioDolar)>100000 || (totalBrutoEth*precioDolar)>100000)

// A) Nombre y cantidad de la criptomoneda más minada.

// Si el ingreso supera los 100.000 ARS calcular impuesto de AFIP del 21% e informar
		if((totalBrutoBtc*precioDolar)>100000 || (totalBrutoEth*precioDolar)>100000)
		{

		}	
		//----------------------sigue 
		sigue=prompt("desea seguir ingresando? s/n");
	}//fin while-----------------------------------------------------------------------
	// D) Sabiendo que el coste de electricidad para:
// BTC es de un 7% y para ETH es un 4% calcular el ingreso total neto en USD.
	totalNetoBtc=totalBrutoBtc*(1-costeElectricidadBtc/100);
	totalNetoEth=totalBrutoEth*(1-costeElectricidadEth/100);
// E) Convertir el ingreso neto en ARS solo para ETH. Sabiendo que la cotización de 1 USD a ARS es de $337.
	totalNetoBtcPesos=totalNetoBtc*precioDolar;
	totalNetoEthPesos=totalNetoEth*precioDolar;

}