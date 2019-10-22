// 18.Solicita el ingreso de la coordenada de un punto. El formato a ingresar por teclado 
// es: (999,999)Los números pueden tener entre 1 y 3 dígitos.

var coordenada = prompt("Introduce una coordenada con el formato (999,999) : ");
var regex = /^[0-9]{3}\,[0-9]{3}$/
var result = regex.test(coordenada);


alert(result);


