/*
Nombre: Juan Pablo Etchart
al presionar el botón mostrar 10 repeticiones 
con números DESCENDENTES, desde el 10 al 1.*/
/* function mostrar()
{
	var contador;

	contador=10;

	while(contador>0){
		alert(contador);
		contador -= 1;
	}
	alert("terminaron de pasarse numeros");

}//FIN DE LA FUNCIÓN *//* 
 
// 2 biss-----------------------
while 2 bis: Ingresar 5 números, y determinar la cantidad de
 números que son mayores que 10 y menores 20 (inclusive en ambos casos)

 function mostrar()
 {
	let numeroIngresado;
	let cont;

	cont=0

	for(let i=0;i<5;i++)
	{
		numeroIngresado=parseInt(prompt("ingrese un numero"));
		while(isNaN(numeroIngresado))
		{
			numeroIngresado=parseInt(prompt("Error,ingrese un numero valido"));
		}
		if(numeroIngresado>=10 && numeroIngresado<=20)
		{
			cont+=1
		}
	}
	alert("hay "+cont+" numeros entre 10 y 20")
 }//fin de la funcion
 */

 //2 bis bis------
 /*  While 2 bis bis: Ingresar numeros hasta que el usuario quiera.
  Determinar la cantidad de números que son mayores que 10 y menores 20 (inclusive en ambos casos).
  También el promedio de los números que cumplen la condición anterior.*/
 function mostrar()
 {
	let numeroIngresado;
	let vueltas;
	let respuesta;
	let contador;
	let promedio;
	let acumulador;

	respuesta='si';
	vueltas=0
	contador=0
	acumulador=0

	while(respuesta=="si"||respuesta=="SI"||respuesta=="sI"||respuesta=="Si")
	{
		numeroIngresado=parseInt(prompt("ingrese un numero"));
		while(isNaN(numeroIngresado))
		{
			numeroIngresado=parseInt(prompt("Error,ingrese un numero valido"));
		}//validacion numero
		
		if(numeroIngresado>=10 && numeroIngresado<=20)
		{
			contador+=1;
			acumulador+=numeroIngresado;
		}
		
		vueltas+=1;
		respuesta=prompt("desea seguir ingresand numeros? si/no");

	}
	promedio=acumulador/contador;
	alert("hay "+contador+" numeros entre 10 y 20");
	alert("el promedio es: "+promedio);
 }