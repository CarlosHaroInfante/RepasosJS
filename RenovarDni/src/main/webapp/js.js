/**
 * 
 */

var guardar = [];
function renovar() {
	
	const escribir = document.getElementById("tabla")
		 
	 do{
	 var numero = prompt("Número del DNI");
	 }
	 while(!Number(numero) || numero.length != 8);
	 var letras = 'TRWAGMYFPDXBNJZSQVHLCKE';
	 
	 var resto = numero % 23;
	 
	 var letraCalculada = letras.charAt(resto);
	 
	 var DNI = numero + letraCalculada;
	 
	 var nombre = prompt("Nombre Completo");
	 
	 var edad = prompt("Edad");
	 alert(edad);
	 
	 var anyoRenovacion;
	 let fecha = new Date();
	 
	 if(edad < 5){
		 
	  fecha.setFullYear(fecha.getFullYear() + 2);
		 
	 }
	 else if (edad > 5 && edad < 30){
		 
		 fecha.setFullYear(fecha.getFullYear() + 5);
	 }
	 else if (edad > 30 && edad < 70){
		 fecha.setFullYear(fecha.getFullYear() + 10);
	 }
	 
	 else if(edad > 70){
		 fecha = "Nunca";
	 }
	 
	 else {
		alert("Error al insertar la edad");
	 }
	 
	 guardar.push([nombre, DNI, edad, fecha])
	 
	 
	 /*document.getElementById("Nombre").innerHTML = nombre;
	 document.getElementById("DNI").innerHTML = DNI;
	 document.getElementById("Edad").innerHTML = edad;
	 document.getElementById("Renovacion").innerHTML = anyoRenovacion;*/
	 
	 escribir.innerHTML += ("<tr><td>" + nombre + "</td><td>" + DNI + "</td><td>" + edad + "</td><td>"+ fecha.getMonth() + "/" + fecha.getFullYear() +  "</tr>")
	 
 }