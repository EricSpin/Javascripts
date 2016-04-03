
/*
function printList(list){
	var listHTML = '<ol>';
	for (var i=0; i<list.length; i += 1){
		listHTML+='<li>'+list[i]+'</li>';
	}
	listHTML+='<ol>';
	print(listHTML);
}
function print(html){
	document.write(html);
}


var playList=[];
playList.push("Strangers in the nigth");
playList.push("Mi conejito era tan bandidon");
playList.push("Borro Cassette", "Ginza");
playList.push("The girl from Ipanema");
playList.push("Soneros de bailadores");

printList(playList);*/

var productosDisponibles=["Queso","Carne","Arroz"];
 
while(true){
 var product = prompt("Ingrese SALIR para salir o busque el producto que desee");
 if(product=="SALIR"){
 	alert("Gracias por su visita");
 	break;
 }
 else if(product == "Queso" || product =="Carne" || product=="Arroz"){
 	var pro=productosDisponibles.indexOf(product)
 	alert("si hay en la tienda"+productosDisponibles[pro])

 }
 else if(product != "Queso" || product !="Carne" || product!="Arroz"){
 	alert("No existe en la tienda" + product)
 	var preg = prompt ("desea ver la lista:");
 	while(true){
 		if (preg=="si"){
 			for(var i=0; i<productosDisponibles.length; i++)
 			{
 				document.write(productosDisponibles[i]);
 			}
 			break;
 		}
 		else{
 			break;
 	}
 
}
}
}
 	
/*array dimesionales , matriz*/

/*function printListReproduccion(list){
	var listHTML = '<ol>';
	for (var i=0; i<list.length; i += 1){
		listHTML+='<li>Tema:  	' + list[i][0] + '.Por  	' + list[i][1];
	}
	listHTML+='<ol>';
	print(listHTML);
}
function print(html){
	document.write(html);
}


var playList=[];
playList.push(["Strangers in the nigth","FRank Sinatra"]);
playList.push(["Mi conejito era tan bandidon","Los COnquistadores"]);
playList.push(["Borro Cassette", "Maluma"]);
playList.push(["The girl from Ipanema","skgskg"]);
playList.push(["Soneros de bailadores","akjhaslhsalh"]);

printListReproduccion(playList);*/


 /*Cuestionario de preguntas con arrays*/
/*var preguntas = [];
preguntas.push(["Por Cuanto gano barcelona ante el cuenca?", 2]);
preguntas.push(["Cual es la Capital del Ecuador?", "Quito"]);
preguntas.push(["Cuantas provincias tiene el Ecuador?", 24]); //http://www.ambiente.gob.ec/areas-protegidas-3/
preguntas.push(["Como se llama el presidente del Ecuador?", "Rafael"]);
preguntas.push(["Cuanto es 2 x 2?", "4"]);

//Imprime las respuestas, distinguiendo del tipo, correcta o incorrecta
function imprimirRespuestas(tipoRespuestas)
{
	var arregloRespuestas;
	var stringRespuestas = '';
	if(tipoRespuestas.toLowerCase()=="correctas" || tipoRespuestas.toLowerCase()=="incorrectas")
	{
		if(tipoRespuestas=="correctas")
		{
			arregloRespuestas = correctas;
		}else{
			arregloRespuestas = incorrectas;
		}

		if(arregloRespuestas.length<1)
		{
			stringRespuestas = "No hubo respuestas " + tipoRespuestas;
		}
		for (var i =0; i<arregloRespuestas.length; i++)
		{
			stringRespuestas += "<p><b>" + arregloRespuestas[i][0] + "</b><br>" + 
			arregloRespuestas[i][1] + "</p>";
			
			//Si la respuesta es incorrecta, agregar las respuesta verdadera
			if(tipoRespuestas=="incorrectas")
			{
				stringRespuestas+= "<i>La respuesta correcta era: " + 
				arregloRespuestas[i][2] + "</i>";
			}
		}
	}else{
		alert("error, vea consola!");
		throw new Error("Tipo de Respuesta no aceptado");
	}
	return stringRespuestas;
}

//Imprime todas el cuestionario, incluyendo respuestas correctas e incorrectas
function imprimirCuestionario()
{
	html += "<h3>Respuestas Correctas</h3>";
	html += imprimirRespuestas("correctas");
	html += '<h3 style="color:red;">Respuestas Incorrectas</h3>';
	html += imprimirRespuestas("incorrectas");
	return html;
}

function printHTML(mensaje)
{
	//document.write(html);
	//Reemplazado por Get elementByID para tomar el nodo (Node Object) en el DOM
	var outputDiv = document.getElementById("output");
	outputDivinnerHTML = mensaje;
}

var respuestas = [];
var correctas = [];
var incorrectas = [];

//Preguntamos y procesamos las respuestas
for(var i=0; i<preguntas.length; i++)
{
	var respuestaSimple;
	do{
		respuestaSimple = prompt("Responda: " + preguntas[i][0]);
	}while(respuestaSimple=='')

	if(isNaN(respuestaSimple))
	{
		respuestas.push(respuestaSimple.toLowerCase());
	}else{
		respuestas.push(parseInt(respuestaSimple));
	}

	if(respuestas[i]==preguntas[i][1])
	{
		correctas.push(preguntas[i]);
	}else{
		incorrectas.push([preguntas[i][0],respuestas[i],preguntas[i][1]]);
	}
}

var html = "<h1>Pregunta Pregunton</h1>";
html += "<h2>Aqui el resultado de sus respuestas</h2>"
html += imprimirCuestionario();
printHTML(html);*/

/*var estudiante ={nombre:"Flor",
				notas:[10,9,8,7]};*/

/*var persona={
	nombre:"Erick",
	pais:"Ecuador",
	edad:30,
	laborando:true,
	habilidades:["Java", "C++","Redes","Visual Basic"]
};

function printHTML(mensaje)
{
	//document.write(html);
	//Reemplazado por Get elementByID para tomar el nodo (Node Object) en el DOM
	var outputDiv = document.getElementById("output");
	outputDiv.innerHTML = mensaje;
}
var saludo = "<p> Hola " + persona.nombre + "bienvenido</p>";
saludo += "<p> Como estan las cosas en " + persona.pais + "?</p>";
persona.nombre = "ProgramadorWeb";
saludo += "<p> Tu nombre de usuario es: " + persona.nombre + "</p>";
saludo += "<p> Tu edad pronto sera: " + (persona.edad+1) + "</p>";
saludo += "<p> Tienes hasta el momento" + persona.habilidades.length  + " habilidades </p>";
saludo += "<p> Las Habilidades son: " + persona.habilidades.join(",") + "</p>";
printHTML(saludo);*/