const nameTitle= document.querySelector("#name");// creamos una variable que va hacer referencia al alemento con el id="name"
const input = document.querySelector("#input");//creamos otra constante con el texto que el usuario introduce por medio del formulario

const writeName = ()=> {//la flecha indica que la sigueinte estrada (parametros) produce este resultado en ("el cuerpo")
    const inputValue = input.value;// creamos otra constante que va a ser igual a la variable input que utiliza su priedad "valor (contenido de la variable)"
    nameTitle.textContent = inputValue; //a nuestra constante nameTitle la vamos a dar el valor de InputValue
}