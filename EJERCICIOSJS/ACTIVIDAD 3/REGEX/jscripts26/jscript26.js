// 22.Buscar la primera palabra de cada frase
function expresion() {
  var frase = document.getElementById("inputext").value;
  var regex = /\b\w*te\w*\b/g;
  var resultado = frase.match(regex);
  var contador = resultado.length;
  
  document.getElementById("p1").innerHTML = contador;
  console.log(contador);
  
}
  