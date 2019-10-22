var num = prompt("Introduce una frase : ");


var numeros = 0;
var total = 0;
var entera = 0;
var decimal = "";


// for (i = 0; i <= num.length; i++) {
// 	if (Number.isInteger(parseInt(num.charAt(i)))) {
// 		numeros = parseInt(num.charAt(i));
// 		total += numeros
// 	} else if (parseInt(num) % 1 != 0) {
// 		entera = parseInt(num);
// 		decimal = partDecimal();
// 		total = entera + decimal;
// 	}
// }
// alert(total);


// function partDecimal(){
// 	punto = 0;
// 	for (i = 0; i <= num.length; i++) {
// 		if (num.indexOf(i) = '.' ){
// 			punto = i;
// 		}
// 		decimal += indexOf(punto+1);
// 	}
// }




num = num.split('.').join("");
if (!isNaN(num)) {
	for (i = 0; i < num.length; i++) {
		numeros = parseInt(num.charAt(i));
		total += numeros;
	}
	alert(total);
} else {
	alert("Error no es un numero");
}
