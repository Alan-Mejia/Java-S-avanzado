/* fetch nos permite hacer peticiones https desde Java Script*/ 
//JSON = Java Script Object Notation
//Por defecto si nos especificamos metodo se ejecuta con metodo get

const peticion =  fetch("https://jsonplaceholder.typicode.com/todos/1")
.then(resp => resp.json())//Esta es la forma de realizar peticiones a las API's consta de la peticion fetch y de sus 2 promesas then, el primer .then es para que nos regrese un arreglo de objetos y se utiliza .json() el segundo .then es para poder tener la informacion
.then(data => {
    console.log(data);
}).catch(e =>{
    console.log(e);
});

console.log(peticion);

