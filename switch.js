const edad = parseInt(prompt("Ingresa tu edad"));
let mensaje;

switch(edad){
    case 18:
        mensaje="Acaba de cumplir la mayoria de edad";
        break;
    case 25:
        mensaje="Ya eres adulto"
        break;
    case 70:
        mensaje="Ya eres de la tercera edad";
        break;
    default:
        mensaje="Fuera del rango de edad";
        break;
}

document.write(`<p>${mensaje}</p>`);

