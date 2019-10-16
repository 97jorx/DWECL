// 29.

function expresion1() {
  var frase = document.getElementById("inputext").value;
  var regex = new RegExp("<body([^]*)>([^]*)<\/body>", "gim");
  var resultRegex = frase.match(regex);
  console.log(resultRegex);
  document.getElementById("result").innerHTML = frase;
}

