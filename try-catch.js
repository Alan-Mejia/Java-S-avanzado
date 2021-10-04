//Try nos permite ejecutar codigo propenso a fallar de manera segura
const gravedad = 9.8;
console.log(gravedad);

try{//con trey le decimos "intenta ejecutar este loque de codigo"
    gravedad = 10.5;
    console.log(gravedad);
}catch(e){// "y si hay algun error atrapalo y muestramelo";
    //solo se va a ejecutar si hay un erroe en el bloque de codigo try
    console.log(e);
}finally{
    console.log("Soy el finally");
}

console.log(gravedad);

/*Como conclusion s eutiliza try y catch cuado sabemos que es posible
que un bloque de codigo falle, por ejemplo al momento de conectarnos a un 
servidor, a un API , etc.*/