// 22.Buscar la primera palabra de cada frase
function expresion() {
  var frase = document.getElementById("inputext").value;
  var regex = /^(\w+)/;
  var resultado = regex.exec(frase);
  var result = RegExp.$1;
  
  document.getElementById("p1").innerHTML = result;
  
  
}