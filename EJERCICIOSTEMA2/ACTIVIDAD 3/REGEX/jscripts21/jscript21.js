// 21.Confecciona una expresión regular que valide el ingreso del nombre de un día de la semana y un número de 1 o 2 dígitos
function expresion() {
  var dias = document.getElementById("inputext").value;
  var regex = /^(Lunes|Martes|Miercoles|Jueves|Viernes|Sabado|Domingo)(\d{1,2})$/
  var result = regex.test(dias)

  if (result){
      document.getElementById("p1").innerHTML = "Dia correcto";
  } else {
      document.getElementById("p1").innerHTML = "Dia incorrecto";
  }
}