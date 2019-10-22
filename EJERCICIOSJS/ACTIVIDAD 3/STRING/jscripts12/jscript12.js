var frase = prompt("Introduce una frase");

frase = frase.trim();
var arr = frase.split(' ');
var primera = arr[0];
var ultima = arr[arr.length - 1];
var numPalabras = arr.length;

document.write(primera);
document.write(ultima);
document.write(numPalabras);