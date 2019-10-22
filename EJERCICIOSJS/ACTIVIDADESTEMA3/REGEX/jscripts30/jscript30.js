// 30.

function expresion1() {
  var frase = document.getElementById("inputext").value;
  var regex1 = new RegExp("<body([^]*)>([^]*)<\/body>", "gim");
  var resultRegex = frase.match(regex1);
   var regex2 = new RegExp("<[^]*>", "gim");
   var resultRegex = resultRegex[0].match(regex2);

  console.log(RegExp.$1);
  document.getElementById("result").innerHTML = frase;
}

