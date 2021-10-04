const $btnCat = document.querySelector("#btnCat");
const $divcats = document.querySelector("#cats");


$btnCat.addEventListener("click" , async() =>{
    const respuesta = await fetch("https://api.thecatapi.com/v1/images/search");//esto seria lo equivalente a la linea 16
    const data = await respuesta.json();//esto sustituiria las promesas de la linea 17
    const imgCat = document.createElement(`img`);
        imgCat.src=data[0].url;
        $divcats.appendChild(imgCat);
        imgCat.width = "300"; //para que no salgan tan grandes las imagenes;
});


/*$btnCat.addEventListener("click" , () =>{
fetch("https://api.thecatapi.com/v1/images/search")
    .then(resp => resp.json().then(data =>{
        console.log(data);
        const imgCat = document.createElement(`img`);
        imgCat.src=data[0].url;//accede al elemento subindice 0 y utiliza su url para atraer la imagen
        $divcats.appendChild(imgCat);
    }))
});*/



/*Desestructuracion  //
const [cat]=data;//del arreggolo data vamos a sacar un objeto y lo guardamos en una nuevo arreglo llamado data;
console.log(cat);
const {url}=cat;*/