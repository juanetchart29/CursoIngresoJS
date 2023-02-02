/*1.
Nombre:Juan Pablo Etchart
Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	let nUno;
    let nDos;
    let nTres;
    let operacion;

    nUno=parseInt(document.getElementById("txtIdPrecioUno").value);
    nDos=parseInt(document.getElementById("txtIdPrecioDos").value);
    nTres=parseInt(document.getElementById("txtIdPrecioTres").value);
    operacion=nUno+nDos+nTres;

    alert(operacion);
}
function Promedio () 
{
	let nUno;
    let nDos;
    let nTres;
    let operacion;

    nUno=parseInt(document.getElementById("txtIdPrecioUno").value);
    nDos=parseInt(document.getElementById("txtIdPrecioDos").value);
    nTres=parseInt(document.getElementById("txtIdPrecioTres").value);
    operacion=(nUno+nDos+nTres)/3;
     
    alert(operacion);
}
function PrecioFinal () 
{
	let nUno;
    let nDos;
    let nTres;
    let operacion;
    let iva;

    iva=21;

    nUno=parseInt(document.getElementById("txtIdPrecioUno").value);
    nDos=parseInt(document.getElementById("txtIdPrecioDos").value);
    nTres=parseInt(document.getElementById("txtIdPrecioTres").value);
    operacion=(nUno+nDos+nTres)*iva/100+((nUno+nDos+nTres));

    alert(operacion);
}
