/* 
Nombre:Juan PAblo Etchart
Al presionar el botón pedir
 5 números e informar la suma acumulada y el promedio
 */
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
		acumulador+=numeroIngresado;
	}// termina el while

	
	
	txtIdSuma.value=acumulador;
	txtIdPromedio.value=acumulador/5;
}//FIN DE LA FUNCIÓN