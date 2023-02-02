/*3.
Nombre:Juan Pablo Etchart
Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	let fahr;
    let cent;

    fahr=parseInt(document.getElementById("txtIdTemperatura").value);
    cent=(fahr-32)*5/9;

    alert(fahr+" fahrenheit son "+cent+" centigrados")
}

function CentigradosFahrenheit () 
{
	let fahr;
    let cent;
    
    cent=parseInt(document.getElementById("txtIdTemperatura").value);
    fahr=(cent*9/5)+32;

    alert(cent+" centigrados son "+fahr+" fahrenheit" )

}
