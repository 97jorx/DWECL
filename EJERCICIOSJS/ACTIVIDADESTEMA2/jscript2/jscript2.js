/*
var fact = prompt("INtroduce un numero ");
function factorial() {
  var resultado = 1;
  for (i = 1; i <= fact; i++)
    alert(resultado = resultado * i);
}
factorial();
*/

var n = prompt("INtroduce un numero ");
function recursivo(n) {
  if ( n == 0){
    return 1;
  }
  return n * recursivo(n-1);
}

alert(recursivo(n));