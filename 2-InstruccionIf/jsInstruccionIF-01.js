//nombre: Juan Pablo Etchart
/*
 function mostrar()
{
	//declaro variables
	let ingresoInt;
	let mensaje;

	//tomo la edad 
	ingresoInt=parseInt(document.getElementById("txtIdEdad").value);
	// if 
	if(ingresoInt==15)
	{
		//defino el mensaje 
		mensaje="niña bononita";
	}
	else
	{
		//defino el mensaje
		mensaje="la edad es distinta de 15";
	}
	//muestro el mensaje
	alert(mensaje);

} 
*/
/* 
//------------
Ejercicio 1bis: 
/con if
pedir a una persona que fue de vaciones , 
la distancia que viajo y el tiempo que tardo, para calcular la velocidad
e informar:
60 km/hr = muy lento 
hata 80km/h= lento 
hasta 100= buen ritmo
hasta 120= ahi de la ley 
mas = eso no se hace
*/
/* function mostrar()
{
	let distancia;
	let tiempo; 
	let velocidad;
	let mensaje;

	distancia=parseFloat(document.getElementById("txtIdEdad").value);// suponiendo que la ingresa en kilometros 
	tiempo=parseFloat(prompt("Ingrese el tiempo que tardo en recorrer la distancia(en horas)"));
	velocidad=Math.round(distancia/tiempo);
	
	if (velocidad <= 60)
	{
		mensaje=" muy lento";
	}else if(velocidad<=80)
	{
		mensaje=" lento";
	}else if(velocidad<=100)
	{
		mensaje=" buen ritmo";
	}else if (velocidad<=120)
	{
		mensaje=" hasta ahi de la ley";
	}else if(velocidad >120)
	{
		mensaje=" eso no se hace";
	}
	alert("la velocidad es "+velocidad+"km/h"+mensaje);
} */
//------------------
/* Ejercicio 1 bis bis:
con if
ingresar el nombre y los datos requeridos para calcular el IMC , 
e informar a la persona si es:
Bajo peso <18.5
Peso normal 18,5-24.9
Preobesidad 25-26.9
Obesidad I 27-29.9
Obesidad II 30-34.9
Obesidad III >40 */
function mostrar()
{
	let peso;
	let altura;
	let imc;
	let mensaje;

	peso=parseFloat(document.getElementById("txtIdEdad").value);
	altura=parseFloat(prompt("Ingrese la altura en metros: "));
	imc=(peso/(altura*altura).toFixed(1));//lo busque en google para redondear un digito despues de la coma
	

	if(imc<18.5)
	{
		mensaje="bajo peso";
	}else if(imc<=24.9)
	{
		mensaje=" peso normal";
	}else if(imc<=26.9)
	{
		mensaje=" preobesidad";
	}else if(imc<=29.9)
	{
		mensaje=" obesidad I";
	}else if(imc<=34.9)
	{
		mensaje=" obesidad II";
	}else
	{
		mensaje=" obesidad III";
	}
	alert("el imc: "+imc+mensaje)

}










/*
//anotaciones en clase 

	if(condicion)//verdadero o falso (0) true -> verdadero false -> falso
	{
		codigo...;
	}else
	{
		codigo...;		
	}

	operadores aritmeticos:
	+ - * / %
	operadores relacionales o condicionales
	< > <= >= == !=
	operadores logicos
    condicionUno	&&  condicionDos            ||               !
				y          logica             o logica         negacion(se puede poner adelante de un argumento)


math.ceil: redondea al proximo numero entero mas grande
Math.ceil(.95);    // 1
Math.ceil(4);      // 4
Math.ceil(7.004);  // 8
Math.ceil(-0.95);  // -0
Math.ceil(-4);     // -4
Math.ceil(-7.004); // -7
	*/