var frase = prompt("Introduce una frase");
var palabra = prompt("Introduce una palabra");
var count = 0;

var fraseArr = frase.split(' ');
for (i = 0; i < fraseArr.length; i++) {
     if (fraseArr[i] == palabra){
         fraseArr[i] = 'dwecl';
         break;
     }
}


frase = fraseArr.join(' ');
document.write(frase + " <br>");
document.write("Longitud de la palabra" + palabra.length);