const $btnCat = document.querySelector("#btnCat");
const $divcats = document.querySelector("#cats");


$btnCat.addEventListener("click" , () =>{
    fetch("https://api.thecatapi.com/v1/images/search")
    .then(resp => resp.json().then(data =>{
        console.log(data);
    
        const imgCat = document.createElement(`img`);
        imgCat.src=data[0].url;//accede al elemento subindice 0 y utiliza su url para atraer la imagen
        $divcats.appendChild(imgCat);
        /*document.body.append(imgCat);*/
    }))
});

/*Desestructuracion  //
const [cat]=data;//del arreggolo data vamos a sacar un objeto y lo guardamos en una nuevo arreglo llamado data;
console.log(cat);
const {url}=cat;*/
