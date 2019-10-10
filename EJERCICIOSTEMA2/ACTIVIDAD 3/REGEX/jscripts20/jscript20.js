// 20.Valida una matrícula moderna
function expresion() {
  var matricula = document.getElementById("inputext").value;
  var regex = /^(\d{4})(((?![AEIOU])[A-Z]){3}$)/
  var result = regex.test(matricula)

  if (result){
      document.getElementById("p1").innerHTML = "Matricula correcta";
  } else {
      document.getElementById("p1").innerHTML = "Matricula incorrecta";
  }
}