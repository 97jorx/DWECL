var frase = "";
var p = "";
var resultado;
var regex = "";

function expresion1() {
  frase = document.getElementById("inputext").value;
  p = document.getElementById("inputext2").value;
  regex = new RegExp("\\b(" + p + ")\\w*", "g");
  resultado = frase.match(regex);
  document.getElementById("p1").innerHTML = resultado;
}

function expresion2() {
  frase = document.getElementById("inputext").value;
  p = document.getElementById("inputext2").value;
  regex = new RegExp("(\\w+)" + p + "\\b", "g");
  resultado = frase.match(regex);
  document.getElementById("p1").innerHTML = resultado;
}

function expresion3() {
  frase = document.getElementById("inputext").value;
  p = document.getElementById("inputext2").value;
  regex = new RegExp(`\\b\\w*${p}\\w*\\b`, `g`);
  resultado = frase.match(regex);
  document.getElementById("p1").innerHTML = resultado;
}
