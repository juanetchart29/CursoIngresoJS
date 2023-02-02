/*2.
Nombre: Juan Pablo Etchart
Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    let largo;
    let ancho;
    let perimetro;
    
    largo=parseFloat(document.getElementById("txtIdLargo").value);
    ancho=parseFloat(document.getElementById("txtIdAncho").value);
    perimetro=2*largo+2*ancho;
// al necesitar darle tres vueltas con el alambre 
//hay que multipplicar el perimetro por 3 para obtener el alambre necesario
    alert("la cantidad de alambre necesaria es de: "+ perimetro*3+" metros");
}
function Circulo () 
{
    let radio;
    let perimetro;

    radio=parseFloat(document.getElementById("txtIdRadio").value);
    perimetro=2*Math.PI*radio;

    alert(perimetro);
}
function Materiales () 
{
	// suponiendo que el contrapiso es solo para el rectangulo 
    let largo;
    let ancho;
    let area;

    largo=parseFloat(document.getElementById("txtIdLargo").value);
    ancho=parseFloat(document.getElementById("txtIdAncho").value);
    area=largo*ancho;

    alert("se requieren "+area*2+" bolsas de cemento y "+area*3+" bolsas de cal")
}
// si fuera para el terreno circular 
/*    
    let radio;
    let area;

    radio=parseFloat(document.getElementById("txtIdRadio").value);
    area=Math.Pi*radio*radio;

    alert("se requieren "+area*2+" bolsas de cemento y "+area*3+" bolsas de cal")
*/
    
    



