// 22.Buscar la primera palabra de cada frase
function expresion() {
  var frase = document.getElementById("inputext").value;
  var regex = /\b(lo)\w*/g;
  var resultado = frase.match(regex);
  
  
  document.getElementById("p1").innerHTML = resultado;
  console.log(resultado);
  
}
  