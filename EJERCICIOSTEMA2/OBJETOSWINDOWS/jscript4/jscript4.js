
function alarma() {
  date = new Date();
  hora = date.toTimeString();
  hora = hora.split(' ')[0];
  document.getElementById("clock").innerHTML = hora;
  input = document.getElementById("t1").value;
  if (input == hora) {
    var r = confirm("¿ Posponer 2 min ?");
    if (r) {
      alert("Se ha adelantado la hora de la alarma a las ");
      var date1 = new Date();
      date1 = date1.setMinutes(date1.getMinutes() + 2).
      date1 = date1.toTimeString();
      date1 = date1.split(' ')[0];
      input = document.getElementById("t1").value = date1;
    } else {
      alert("CANCEL!");
    }
  }
  console.log(input);
}
setInterval(alarma, 1000);









