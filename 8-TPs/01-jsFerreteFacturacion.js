/*1.
Nombre:Juan Pablo Etchart
Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	let n1;
    let n2;
    let n3;
    let operacion;

    n1=parseInt(document.getElementById("txtIdPrecioUno").value);
    n2=parseInt(document.getElementById("txtIdPrecioDos").value);
    n3=parseInt(document.getElementById("txtIdPrecioTres").value);
    operacion=n1+n2+n3;

    alert(operacion);
}
function Promedio () 
{
	let n1;
    let n2;
    let n3;
    let operacion;

    n1=parseInt(document.getElementById("txtIdPrecioUno").value);
    n2=parseInt(document.getElementById("txtIdPrecioDos").value);
    n3=parseInt(document.getElementById("txtIdPrecioTres").value);
    operacion=(n1+n2+n3)/3;
     
    alert(operacion);
}
function PrecioFinal () 
{
	let n1;
    let n2;
    let n3;
    let operacion;

    n1=parseInt(document.getElementById("txtIdPrecioUno").value);
    n2=parseInt(document.getElementById("txtIdPrecioDos").value);
    n3=parseInt(document.getElementById("txtIdPrecioTres").value);
    operacion=(n1+n2+n3)*1.21;

    alert(operacion);
}
