// 28. Buscar dentro de un texto palabras con una longitud determinada. La longitud la decidirá el

function expresion1() {
  var frase = document.getElementById("inputext").value;
  var length = document.getElementById("inputext2").value;
  var regex = new RegExp("\\b[a-zA-Z\u00C0-\u024F\u1E00-\u1EFF]*\\b", "gi");
  var resultRegex = frase.match(regex);
  var aux = "";

  for (i = 0; i < resultRegex.length; i++) {
    if (resultRegex[i].length == length) {
      aux += resultRegex[i] + '&nbsp;';
    }
    
  }



  document.getElementById("p1").innerHTML = aux;
}


