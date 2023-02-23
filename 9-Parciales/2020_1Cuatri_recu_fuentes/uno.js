/* Enunciado: recuperatorio 1

Debemos realizar la carga de una compra de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo de producto (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más caro de los jabones, la cantidad de unidades y el fabricante
b) Del tipo de producto con más unidades en total de la compra, el promedio por compra
c) Cuántas unidades de Barbijos se compraron en total */
function mostrar()
{
	let tipoProductoIngresado;
	let precioIngresado;
	let cantidadUnidadesIngresadas;
	let marcaIngresada;
	let fabricanteIngresado;
	let sigue;
	
	let banderaJabonCaro;
	let jabonMasCaro;
	let cantidadJabonesCaro;
	let fabricanteJabonCaro;

	let mayorCantidad;
	let	promedioCompra;
	let precioPorCompra;
	let acumuladorCompras;
	let contadorcompras;
	
	let cantidadBarbijosTotal;

	sigue = "s"
	while (sigue=="s")
	{
		// validacion tipo producto
		tipoProductoIngresado = prompt("ingrese un producto: 'barbijo' ,'jabon' o 'alcohol'");
		while(tipoProductoIngresado!="barbijo" && tipoProductoIngresado!="jabon" &&tipoProductoIngresado!="alcohol")
		{
			tipoProductoIngresado = prompt("ingrese un producto valido: 'barbijo' ,'jabon' o 'alcohol'");
		}
		// validacion precio
		precioIngresado = parseInt(prompt("ingrese el precio unitario"));
		while(precioIngresado<100 || precioIngresado>300)
		{
			precioIngresado = parseInt(prompt("error,ingrese el precio unitario valido"));
		}
		//validacion cantidad
		cantidadUnidadesIngresadas = parseInt(prompt("ingrese la cantidad de unidades"))
		while(cantidadUnidadesIngresadas<1 || cantidadUnidadesIngresadas>1000)
		{
			cantidadUnidadesIngresadas = parseInt(prompt("error,ingrese la cantidad de unidades valida")); 
		}
		//ingreso de marca
		marcaIngresada=prompt("ingrese la marca del producto")
		//ingreso fabricante
		fabricanteIngresado=prompt("Ingrese el fabricante del producto")

		switch(tipoProductoIngresado)
		{
			case "alcohol":
			case "barbijo":
			case "jabon":
		}
	}
}
