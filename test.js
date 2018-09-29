
function buscarpalabras()
{
	document.getElementById("resultados").innerHTML = "";
	busqueda('^[a-zA-ZÀ-ÿ\u00f1\u00d1]{7,2000}$', "1. Todas las palabras que tengan una longitud de 7 o más letras");
}
function sinvocales(){
	document.getElementById("resultados").innerHTML = "";
	busqueda('[^aeiouAEIOUáéíóúÁÉÍÓÚ]$', "2. Expresiones que NO finalicen con una vocal");
}

function buscarM(){
	document.getElementById("resultados").innerHTML = "";
	busqueda('^m[^aeiouAEIOUáéíóúÁÉÍÓÚ]', "3.Las palabras que inicien con “M” donde la segunda letra no sea vocal");
}
function buscarComillas(){
	document.getElementById("resultados").innerHTML = "";
  busqueda('"\"(\\\"|(?!\\\").)+\"|[^ ]+"',"4.Expresiones encerradas entre comillas");
}
function buscarIp(){
	document.getElementById("resultados").innerHTML = "";
    busqueda('^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$', "5.Ip’s");

}
function buscarFechas(){
    document.getElementById("resultados").innerHTML = "";	
   busqueda('^(0?[1-9]|1[012])[- /.](0?[1-9]|[12][0-9]|3[01])[- /.](19|20)?[0-9]{2}$', "6.Fechas");
}
function buscarTelefono(){
	document.getElementById("resultados").innerHTML = "";
	busqueda('^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$', "7. Telefonos");
}
function buscarCorreo(){
	document.getElementById("resultados").innerHTML = "";
	busqueda('^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$', "8.Correos electrónicos");
}
function buscarUrl(){
	document.getElementById("resultados").innerHTML = "";
	busqueda('https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9]\.[^\s]{2,}', "9.Url’s");
}
function buscarCpostal(){	
	document.getElementById("resultados").innerHTML = "";
	busqueda('^[0-9]{5,5}([- ]?[0-9]{4,4})?$', "10.	Código postal");
}

 				
function busqueda(patron, Titulo) {
    
    // document.getElementById("demo").innerHTML =
    // "Welcome 																								" + name + ", the " + job + ".";

    var texto = document.getElementById("entrada").textContent;
    texto = texto.replace(/\./g,"");					
    texto = texto.replace(/\,/g,"");
    texto = texto.replace(/\n/g," ");

    
	var	palabras = texto.split(" ");
	


	var regex1 = RegExp(patron,'g')
	var str1 = 'table football, foosball 1234567 abcdefg';	
	var array1;

	var resultados = document.getElementById("resultados");
	
	var tituloHTML = document.createElement("label");
	tituloHTML.setAttribute("for",Titulo);
	tituloHTML.innerHTML = Titulo;
	resultados.appendChild(tituloHTML);

	var lista = document.createElement("UL");

	palabras.forEach(function(value,index, ar){
		
		if(regex1.exec(value) !== null){
			// console.log(value);
			var elemento = document.createElement("LI");
			var textnode = document.createTextNode(value);
			elemento.appendChild(textnode);
			lista.appendChild(elemento);
		}
	});

	resultados.appendChild(lista);
// while ((array1 = regex1.exec(str1)) !== null) {
//   console.log(`Found ${array1[0]}. Next starts at ${regex1.lastIndex}.`);
//   // expected output: "Found foo. Next starts at 9."
//   // expected output: "Found foo. Next starts at 19."
// }


}

document.getElementById("cuadro1").addEventListener("change", function(){
	var fr = new FileReader("UTF-8");
	fr.onload = function(){
		document.getElementById("entrada").textContent = this.result;
	}
	fr.readAsText(this.files[0],'ISO-8859-1');
});	
