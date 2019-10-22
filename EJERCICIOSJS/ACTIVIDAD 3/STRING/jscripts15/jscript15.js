
var frase = prompt("Introduce una frase");
var char = '';
var mayus = 0;
var minus = 0;

if ( frase === frase.toLowerCase())
     document.write("Todas minusculas");
if ( frase === frase.toUpperCase())
     document.write("Todas mayusculas");

for (i = 0; i < frase.length; i++) {
    char = frase.charAt(i);

    if (!isNaN(char))
        document.write('Contiene numeros');

    if (char == char.toUpperCase())
        mayus++;
    else if (char == char.toLowerCase())
        minus++
}
if (mayus > 0 && minus > 0)
    document.write('tiene minusculas y mayusculas');




