/* 
Recu 2020 1 bis: "Jugando al Doctor" 
De 7 personas que ingresan al hospital se deben tomar y validar los siguientes datos:
nombre, altura, peso y sexo.
a)Informar la cantidad de personas de sexo femenino. 
b)La altura promedio en total de pacientes.
c)El nombre del hombre con menos peso(si lo hay).
d)De la persona no binaria, el más flaco. 
Pedir datos por prompt y mostrar por document.write o console.log 
*/
function mostrar()
{
	let sexo;
	let nombre;
	let altura;
	let peso;

	let contadorFemenino;
	let acumuladorAltura;
	let promedioAltura;

	let banderaMenosPeso;
	let menorPeso;
	let nombreMenosPeso;

	let banderaMasFlacoNoBinario;
	let masFlacoNoBinario;
	let nombreMasFlacoNoBinario;

	acumuladorAltura=0;

	contadorFemenino=0;

	banderaMasFlacoNoBinario=true;
	banderaMenosPeso=true;



		
	for(let i=0;i<2;i++)
	{

		nombre=prompt("ingrese el nombre")
		while(!isNaN(parseInt(nombre)))
		{
			nombre=prompt("error,ingrese el nombre")
		}
		altura=parseInt(prompt("ingrese la altura en cm"));
		while(isNaN(altura)|| altura<20 ||altura >230)
		{
			altura=parseInt(prompt("Error,ingrese una altura correcta en cm"));
		}//fin del while
		
		peso=parseInt(prompt("ingrese el peso en kg"));
		while(isNaN(peso)|| peso<0 ||peso >200)
		{
			peso=parseInt(prompt("Error,ingrese un peso correcto"));
		}//fin del while

		sexo=prompt("ingrese un sexo: 'f','m'o 'nb'(no binario)")
		while(sexo != "f" && sexo != "m" && sexo != "nb")
		{
			sexo=prompt("error,ingrese un sexo valido: 'f','m'o 'nb'(no binario)");
		}//termina while
		switch(sexo)
		{
			case "nb":
				if(banderaMasFlacoNoBinario)
				{
					masFlacoNoBinario=peso;
					nombreMasFlacoNoBinario=nombre;
					banderaMasFlacoNoBinario=false;
				}else if (masFlacoNoBinario>peso)
				{
					masFlacoNoBinario=peso;
					nombreMasFlacoNoBinario=nombre;
				}
				
			case "f":
				contadorFemenino+=1;
				break;

			case "m":
				if (banderaMenosPeso)
				{
					menorPeso=peso;
					nombreMenosPeso=nombre;
					banderaMenosPeso=false;
				}else if (menorPeso>peso)
				{
					menorPeso=peso;
					nombreMenosPeso=nombre;
				}
				break;

		}
		acumuladorAltura+=altura
	}
	promedioAltura=acumuladorAltura/7;// o i
	document.write("LA CANTIDAD DE PERSONAS DE SEXO FEMENINo"+contadorFemenino+"<br>");
	document.write("la altura promedio"+promedioAltura+"<br>");
	document.write("el nombre del hombre con menos peso"+nombreMenosPeso+"<br>");
	document.write("persona no binaria mas flaca"+nombreMasFlacoNoBinario+"<br>");
	
	
}






























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
c) Cuántas unidades de Barbijos se compraron en total
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
 */