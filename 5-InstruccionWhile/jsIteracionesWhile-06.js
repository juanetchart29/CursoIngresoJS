/* 
Nombre:Juan PAblo Etchart
Al presionar el botón pedir
 5 números e informar la suma acumulada y el promedio
 */
//funcion con for y while
function mostrar()
{
	let acumulador;
	let numeroIngresado;

	acumulador=0

	for(let i=0;i<5;i++){
		numeroIngresado=parseInt(prompt("ingrese un numero: "));
		while(isNaN(numeroIngresado)){
			numeroIngresado=parseInt(prompt("Error, ingrese un nnumero"));
		}//fin del while
		acumulador+=numeroIngresado;
	}//fin de for
	txtIdSuma.value=acumulador;
	txtIdPromedio.value=acumulador/5;
}// fin de la funcion
// funcion todo con while
/* 
function mostrar()
{
	var contador;
	var acumulador;
	var numeroIngresado;

	contador=0;
	acumulador=0;

	while(contador<5){
		
		contador+=1;
		numeroIngresado=parseInt(prompt("ingrese un numero: "));
		while(isNaN(numeroIngresado)){
			numeroIngresado=parseInt(prompt("Error, ingrese un nnumero"));
		}//fin del while
		acumulador+=numeroIngresado;
	}// termina el while

	
	
	txtIdSuma.value=acumulador;
	txtIdPromedio.value=acumulador/5;
}
 */
//FIN DE LA FUNCIÓN
/* BUCLE FOR
	variable    condicion   aumento/decremento
for(let i=0;       i<5 ;        i++)




*/