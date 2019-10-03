

function circulo(){
var radio = prompt("Introduce el radio del circulo : ");
document.write("El área del círculo es  " 
               + (Math.PI * Math.pow(radio,2)).toFixed(2) + " cm2");
}

function triangulo(){
    var altura = prompt("Introduce el la altura del triangulo : ");
    var base = prompt("Introduce el la base del triangulo : ");
    document.write("El área del triangulo es  " 
                   + ((base * altura)/2).toFixed(2) + " cm2");
    }