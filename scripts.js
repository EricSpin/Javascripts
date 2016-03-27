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
var preguntas = 3;
var preguntasFaltantes = "Quedan" + preguntas + "preguntas.";
alert("Este es el juego del cuenta cuentos. Sigue las instrucciones.");
var sustantivo1 = prompt("Ingrese un Sustantivo."+preguntasFaltantes);
preguntas = preguntas - 1;
preguntasFaltantes = "Quedan" + preguntas + "preguntas.";
var adjetivo1 = prompt("Ingrese un Adjetivo."+preguntasFaltantes);
preguntas -= 1;
preguntasFaltantes = "Quedan" + preguntas + "preguntas.";
var verbo1 = prompt("Ingrese un Verbo."+preguntasFaltantes);
var cuento = "El" + adjetivo1 + " " + sustantivo1 + "queria" + verbo1 + "";
document.write("<h1>Cuento</h1><p>" + cuento + "</p>");
console.log("Programa Completo");*/



/*var frase1 = prompt("Hola usuario, Ingrese Sustantivo!");
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

/*console.log("Inicio del Programa");
var dado = Math.floor(Math.random() * 6) + 1;
alert("Dado dice:" + dado);
console.log("fin del Programa");*/


/*console.log("Inicio del Programa");
var num1 = prompt("Ingrese numero")
var num2 = Math.floor(Math.random() * num1) + 1;
alert("Numero Ingresado:" + num2);
console.log("fin del Programa");*/



/*codigo utilizando else if "adivina el numero"
console.log("Inicio del Programa");
document.write("<h1>Adivina el numero</h1>");
var num = prompt("Ingrese numero del 1 al 10");
var num1 = Math.floor(Math.random( ) * 10) + 1;


if(num == num1) {

document.write("<h1>Respuesta correcta </h1>");
}
else if(num <= num1){
document.write("<h1>Respuesta Incorrecta, Intenta nuevamente con un valor mayor</h1>");
}
else{


document.write("<h1>La respuesta es menor</h1>");
}
console.log("fin del Programa");*/

/*
function saludame(){
	alert("Hola Erick!");
}
saludame();
*/

/*function tiraDados(){
	var dado = Math.floor(Math.random()*6)+1;
	return dado;

}
alert("Tiramos 3 dados: ");
alert("El Dado dice:" + tiraDados());
var multiplo = 2 + tiraDados();
alert("El multiplo de bonus es:" + multiplo);*/
/*tiraDados();
tiraDados();
tiraDados();*/

/*Argumentos en la funciones*/
/*function numeroAlAzarHastaLimite(limite) {
	var num = Math.floor(Math.random() * limite ) + 1;
	return num;
}
	var numAzar = numeroAlAzarHastaLimite(100);
	alert("Numero al Azar = " + numAzar);*/


/*ejercicio*/
/**function max(num, num2) {

	if (num<num2){
		return num;
		}
		else(num>num2){
		return num2;
		}
	
	
}
	

	var numAzar = max(100);
	alert("Numero al Azar = " + numAzar);*/
	
/*
	function saludo(){
		var mensaje = "Hola a todos";
		alert(mensaje);}

	var mensaje = "Chao";
	saludo();
	alert(mensaje);
	saludo();*/

/*	var num="hgaf";
	if(isNaN(num))
		{ throw new Error ("No es un numero valido"); }
		else{
			num = num*0.5;
		}*/
console.log("Inicio del programa");

function numeroAlAzarEntreLimites(limiteInferior, limiteSuperior){


	if(isNaN(limiteInferior) || isNaN(limiteSuperior))
	{
		throw new Error("Valor ingresado no corresponde a un numero");;

	}
	var num = Math.round(Math.random()*(limiteSuperior-limiteInferior))+limiteInferior;
	
	return num;


}
var limiteSuperior = prompt("Ingrese un limite superior para el primer numero");
var limiteInferior = prompt("Ingrese un limite superior para el primer numero");
alert("Su numero al Azar es:" + numeroAlAzarEntreLimites(parseInt(limiteInferior), parseInt(limiteSuperior)));
console.log("Fin del Programa");

var contador = 0;
while(contador<10){
	var randomico = numeroAlAzarEntreLimites(parseInt(limiteInferior), parseInt(limiteSuperior));
	document.write(randomico + " ");
	contador++;
}


	
