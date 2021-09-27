//similar a un struct en c++
const persona = {
    nombre: "Alan",
    apellidos: "Mejia Martinez",
    correo: "mejialan@gmail.com"
}

document.write(persona.nombre);//la manera de imprimir un atributo de un struct es nombredestruct.atributo;


//este es un struct que contiene 2 indices struc[ { _    _    _  }  {  _    _    _ }]
//                                                  |    |    |        |    |    |
//  tambien llamados subindices                    var1 var2 var 3    var1 var2 var3 
const articulos = [
    {
        id: 1,
        nombre:"Alimentos para perros",
        precio: 30.50,
    },

    {
        id: 3,
        nombre: "Alimento para gatos",
        precio: 60.25        
    }
]

