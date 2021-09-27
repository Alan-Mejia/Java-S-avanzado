/*let num1=parseInt(prompt("Ingresa un numero"));

while(isNaN(num1)){
    num1 = parseInt(prompt("Ingresa un numero:"));
}*/
/*
var num=parseInt(prompt("Ingresa un numero"));
var acumulable=0;
var extra;
var i=1;
while(num>0){
    extra=parseInt(prompt("Ingresa otro numero"));
    if(extra>0)
        acumulable = num+extra;
    else
        break;
    i++;
}

document.write("La suma es: ", acumulable);
document.write("La media es: ", acumulable/i);
*/

let num=parseInt(prompt("Introduce un numero"));

for(let i=0;i<num;i++){
    if(num%i==0)
        document.writeln("Divisor: ", i);
}



