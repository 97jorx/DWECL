var dni = prompt("Introduce los números del DNI : ");

//var parse = parseInt(dni);

var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D',
    'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L',
    'C', 'K', 'E', 'T'];

var dniIntroducido = parseInt(dni);
var letraIntroducida = letras[dni.length];
var letra = letras[dniIntroducido % 23];



if (dniIntroducido < 0 || parseInt(dni) > 99999999 ) {
    alert("El número introducido no es correcto");
} else if (letraIntroducida != letra) {
    alert("La letra introducida no es correcta"+letraIntroducidas);
} else {
    alert("El numero y la letra introducida es correcta"+letra);
} 






