var num = prompt("Introduce un numero : ");
var parse = parseInt(num);


var cadena = parse.toString();
if (num > 0 && num < 1000) {
    for (i = 0; i <= cadena.length - 1; i++) {
        alert(cadena.charAt(i));
    }
} else {
    alert("Error el numero es incorrecto");
}



