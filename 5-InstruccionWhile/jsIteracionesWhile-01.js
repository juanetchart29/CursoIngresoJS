/* 
Nombre:Juan Pablo Etchart
al presionar el botón mostrar 10 repeticiones 
con números ASCENDENTE, desde el 1 al 10.*/
function mostrar()
{
	let numero;

	numero=1;

	while(numero<11){
		alert(numero);
		numero+=1;
	
	}//FIN DEL WHILE
	alert("terminaron de mostrarse los numeros");
	
}//FIN DE LA FUNCIÓN






/* -----------TEORIA EN CLASE---------+FUNCION DE VALIDACION
while
while(numero>10)
	{

		alert("el numero que ingresaste"+numero)
		//numero 11; bucle infinto

	}

do-while:
do{
	
}while(numero>-4)lo ejecuta una vez, cumpla o 
no la cundicion y luego de eso pregunta
si quiero un numero que este entre 0 y 103 puedo hacer 
while !(numero>0 && numero<103) si quiero buscar los numero que no son validos
a veces es mas facil pénsarlo asi

Funcion que se usa en la catedra isNaN() devuekve True si no es un numero 
y devuelve False si es un numero  

VALIDADOR DE NUMERO PARES E IMPARES de 0 a x

function mostrar()
{
	let i;
	let contadorPar;
	let contadorImpar;
	let x;
	let acumuladorPares;
	let acumuladorImpares;

	acumuladorPares=0;
	acumuladorImpares=0;
	contadorPar=0;
	contadorImpar=0;
	i=0;
	x=prompt("ingrese la cantidad de numero de 0 hasta el....")
	
	while(i<x){
		if(i%2==0){
			contadorPar = contadorPar + 1;
			acumuladorPares = acumuladorPares + i;
		}else{
			contadorImpar= contadorImpar + 1;
			acumuladorImpares = acumuladorImpares + i;
		}
		i = i + 1;
		console.log(i);
	}//FIN DEL WHILE
	alert("la cantidad de pares: "+contadorPar+"y la suma de todos estos da: "+acumuladorPares);
	alert("la cantidad de impares: "+contadorImpar+"la suma de todos estos da:	"+acumuladorImpares);
	aler
}//FIN DE LA FUNCIÓN
*/









