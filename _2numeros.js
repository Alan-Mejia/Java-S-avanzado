let num1=parseInt(prompt("Introduce un numero"));
let num2=parseInt(prompt("Introduce un segundo numero"));

if(num1>num2)
document.write("Suma: ", num1+num2," ","Resta:",num1-num2 );
    else 
        if(num2>num1)
        document.write("Multiplicacion: ", num1*num2," ","Division: ", num2/num1 );
    else
        document.write("Son numeros iguales");