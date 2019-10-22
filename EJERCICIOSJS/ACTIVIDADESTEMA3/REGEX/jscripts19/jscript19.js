// 19.Valida el ingreso de una hora con el formato hh:mm:ss o hh:mm
function expresion() {
  var hora = document.getElementById("inputext").value;
  var regex = /^(\d{2})\:(\d{2})\:(\d{2})|^(\d{2})\:(\d{2})/;
  var result = regex.exec(hora);

if (result != null) {
    var hh = RegExp.$1 || RegExp.$4;
    var mm = RegExp.$2 || RegExp.$5;
    var ss = RegExp.$3;
  }

  if ((hh >= 0 & hh <= 24) && (mm >= 0 && mm <= 59) && (ss >= 0 && ss <= 59)){
      console.log("Hora correcta");
  } else {
      console.log("Hora incorrecta");
  }
}


