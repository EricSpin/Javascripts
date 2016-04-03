
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

/*var productosDisponibles=["Queso","Carne","Arroz"];
 
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
}*/
 	
/*array dimesionales , matriz*/

function printListReproduccion(list){
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

printListReproduccion(playList);


