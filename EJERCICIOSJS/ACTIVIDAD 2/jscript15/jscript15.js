var frase = prompt("Introduce una frase : ");


// for (i = 0; i <= frase.length - 1; i++) {
// 	if (frase.charAt(i) == reverse(frase).charAt(i))
// 		alert("Es un palindromo");
// 	else {
// 		alert("NO es un palindromo");	
// 	}
// }



// function invertirString(){
// 	for (i = 0; i <=frase.length-1; i++) {
// 		array  = frase.split('').join(',');
// 		alert(array.charAt(i));
// 	}	
// }

// invertirString();

frase = frase.replace(/ /g,'');
frase = frase.toLowerCase();
for (i = 0, j = frase.length-1; i <= frase.length-1 || j >= 0; j-- , i++) {
	if (frase[i] != frase[j]) {
		alert("No es alindromo");
		break;
	} else {
		alert("Palindromo");
		break;
	}
}

