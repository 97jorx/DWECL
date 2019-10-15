// 28. Buscar dentro de un texto palabras con una longitud determinada. La longitud la decidirá el

function expresion1() {
  var frase = document.getElementById("inputext").value;
  var regex = new RegExp("<script>[^<]*<\/script>", "gim");
  var resultRegex = frase.match(regex);
  console.log(resultRegex);
  document.getElementById("p1").innerHTML = resultRegex;
}

