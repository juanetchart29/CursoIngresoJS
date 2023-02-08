/*4.
Nombre: Juan Pablo Etchart
Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
 	let cantidad;
    let marca;
    let precio;
    let precioTotal
    let precioFinal;
    let impuesto;
    let aumento;

    impuesto=10;// impuesto %10

    precio=35;

    cantidad=parseInt(document.getElementById("txtIdCantidad").value);
    marca=document.getElementById("Marca").value;

    precioTotal=precio*cantidad

    // si la cantidad es mayor igual a 6

    if(cantidad>=6)
    {
        precioFinal=precioTotal*0.5;//descuento del 50%
    }else if(cantidad==5)
    {
        if (marca=="ArgentinaLuz")
        {
            precioFinal=precioTotal*0.6;
        }else
        {
            precioFinal=precioTotal*0.7;
        }
    
    //si la cantidad es 4

    }else if(cantidad==4)
    {
        if(marca=="ArgentinaLuz" || marca=="FelipeLamparas")
        {
            precioFinal=precioTotal*0.75;
        }else
        {
            precioFinal=precioTotal*0.8;
        }
     
    //si la cantidad es 3    

    }else if(cantidad==3)
    {
        if(marca=="ArgentinaLuz")
        {
            precioFinal=precioTotal*0.85;
        }else if(marca=="FelipeLamparas")
        {
            precioFinal=precioTotal*0.9;
        }else 
        {
            preciofinal=precioTotal*0.95;
        }
    
    //si la cantidad es 1 o 2

    }else 
    {
        precioFinal=precioTotal
    }
    
    document.getElementById("txtIdprecioDescuento").value=precioFinal;

    //si supera los $120
    if (precioFinal>120)
    {
        aumento=precioFinal*impuesto/100;
        alert("usted esta pagando: $"+aumento+" de IIBB");
        precioFinal=precioFinal+aumento;
    }
}