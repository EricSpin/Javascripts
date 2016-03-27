/*console.log("Inicio de programa")
alert("HOLA JAVASCRIPTS.0");
document.write("<h1>Hola JS UPSE!</h1>");
alert("Gracias por Visitar");
alert("Mira");
console.log("Fin de programa")*/


/*console.log("Inicio de Programa");
var equipo = prompt("Cual es tu equipo de futbol favorito?");
document.write("<h1>El Equipo es!</h1>" + equipo);
console.log("El Equipo es:" + equipo);
console.log("Fin de programa");*/

/*console.log("Inicio de Programa");
var clave = prompt("Hola usuario, Ingrese su Clave!");
document.write("<h1>clave!</h1>" + clave.length);
document.write("<h1>clave!</h1>" + clave)
console.log("la Longitud de la clave:" + clave.length);
console.log("TA-DA!!!Su clave es:" +  clave.toUpperCase());
console.log("El Valor original de la clave es:"+ clave);
console.log("Fin de programa");*/

/*console.log("Inicio del Programa");
var frase1 = prompt("Hola usuario, Ingrese Sustantivo!");
var frase2 = prompt("Hola usuario, Ingrese adjetivo!");
var frase3 = prompt("Hola usuario, Ingrese verbo!");
document.write("<h1>CUENTO!</h1>");
document.write("<h2>El " + frase1 +" de razas "  + frase2 +" pueden vivir "+ frase3+"</h2> ");
document.write("<h2>Feroses " + frase2 + " el " +  frase1 +" pueden vivir " + frase3+"</h2> ");
document.write("<h2>pueden vivir " + frase3 +" de razas " + frase2 +" El "+ frase1+" </h2>");*/
/*console.log("la Longitud de la clave:" + clave.length);
console.log("TA-DA!!!Su clave es:" +  clave.toUpperCase());
console.log("El Valor original de la clave es:"+ clave);*/
/*console.log("Fin de programa");*/

/*var segundosPorMinuto = 60;
var minutosPorHora = 60;
var horasPorDia = 24;
var segundosPorDia = segundosPorMinuto * minutosPorHora * horasPorDia;
document.write("<h1>Calculadora del Tiempo</h1><p>Hay" + segundosPorDia + "segundos en un dia</p>");*/

/*var segundosPorMinuto = 60;
var minutosPorHora = 60;
var horasPorDia = 24;
var diasPorMes = 30;
var mesPorAño = 12;
var segundosPorDia = segundosPorMinuto * minutosPorHora * horasPorDia;
document.write("<h1>Calculadora del Tiempo</h1><p>Hay" + segundosPorDia + "segundos en un dia</p>");
var Año = segundosPorMinuto * minutosPorHora * horasPorDia * diasPorMes * mesPorAño;
document.write("<h1>Años de Vida</h1><p>Hay" + Año + "dias total</p>")*/

console.log("Inicio del Programa");
var peliculasVistas = prompt("Cuantas peliculas has visto este mes?");
var seriesVistas = prompt("Cuantas series has visto este mes?");
var tiempoPantalla = parseInt(peliculasVistas)+parseInt(seriesVistas);
alert("Wow! Has visto" + tiempoPantalla + "veces minimo la pantalla.");
console.log("Fin de programa");