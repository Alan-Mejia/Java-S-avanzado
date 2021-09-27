
/*Todas estas son formas de crrear arreglos, la tercera es una forma de inicializarlo*/
const arreglo= [];
const arreglo2= new Array();
let laguages = ["JavaScript", "Java", "PHP", "Python", "C#", "C++", "Scala", "Rust", "Ruby", "Cobolo"];

/*for each permite recorrer los indices del arreglo*/
//Esta es la forma tradicianla que utilizabamos para iterar un arreglo
/*for(let i=0; i<languges.length();i++){
    langeages[i];
}*/

//la funcion se llama funcion anonima, porque solo la estoy declarando en el foreach y le estoy metiedp de parameto la variable languages
laguages.forEach(function (language, index) {//el utilizar index nos permite poner en numero (posicion de cada elemento) hace referencia al indice
    document.write(`<p>${index}- ${language}</p>`);//backstick utilizado para imprimir etiquetas html
});//este ultimo parentesis es parte de la sintaxis

document.write(`<h1>Incluso Podemos Imprimir un Arreglo en una lista</h1>`)

document.write(`<ul>`);
        laguages.forEach(function (language, index) {//la funcion foreach indica que va a apuntar a cada uno de los indices del arreglo
        document.write(`<li>${index}- ${language}</li>`);
    });
document.write(`</ul>`);

//Map crea un nuevo arreglo con los resultados

document.write(`<h1>Haciendo Uso de Map</h1>`)
let numero = [1, 2, 4, 35, 79, 75, 12];

let numeros2  = numero.map(function(X){//X es el nombre que tendra el nuevo arreglo 
    return X * 2;
}); 

document.write(`${numero}<br>`);
document.write(`${numeros2}<br>`);

/*Includes determina si un arreglo contiene valor y solo devuelve true or false*/
document.write(`<h1>Utilizando Includes para Arreglos</h1>`)
document.write(laguages.includes("PHP"));

/*Filter, crea un nuevo arreglo con todos los elementos que cumplan con la condicion*/
document.write(`<h1>Utilizando Filter par arreglos<h1>`)
let arreglofiltrado = numero.filter(function(X){
    if(X>10)
        return numero;
});

document.write(`${arreglofiltrado}<br>`);