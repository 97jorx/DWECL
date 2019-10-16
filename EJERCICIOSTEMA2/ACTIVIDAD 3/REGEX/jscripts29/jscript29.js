// 29.

function expresion1() {
  var frase = document.getElementById("inputext").value;
  var regex = new RegExp("<script([^]*)>([^]*)<\/script>", "gim");
  var resultRegex = frase.match(regex);
  console.log(resultRegex);
  
  frase = frase.replace(regex , "");
  
  console.log(frase);
  document.getElementById("result").innerHTML = frase;
}

