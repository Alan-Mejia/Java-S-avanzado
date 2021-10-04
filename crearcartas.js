let contador = 0;
const $contenedor = document.querySelector('#row');

function crearCarta() {

    fetch('https://jsonplaceholder.typicode.com/albums/1/photos')
        .then(data => data.json())
        .then(data => {
            const card = document.createElement("div");
            card.className = "column";
            $contenedor.appendChild(card);
            card.innerHTML = 
            `<div class="card" style="width: 18rem;">
            <img src="${data[contador].url}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">${data[contador].title}</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
            </div>`
            contador++;
        });
}



crearCarta();
crearCarta();
crearCarta();
crearCarta();
crearCarta();
crearCarta();