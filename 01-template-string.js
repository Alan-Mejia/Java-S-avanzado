//alert("Hola como estas");
const nombre = prompt("¿Cual es tu nombre?");
const edad = (prompt("¿Cual es tu edad?"));

console.log("Hola", nombre, "saludos. Tu edad es ", edad, "años" );

//La linea 8 se conoce como template string
const saludo = `Hola ${nombre} saludos. Tu edad es ${edad} años`; //Backstick ayuda a imprimir variables o constantes dentro de los strings
//vamos a mandar a imprimir la variable dentro de una etquiueta h1 de html
const saludo2 = `<h1>Hola ${nombre} saludos. Tu edad es ${edad} años</h1>`;
document.write(saludo);
document.write(saludo2);//se imprime como un h1
