
function hour() { 
  var hora = new Date();
  var hh = hora.getHours();
  var mm = hora.getMinutes();
  var ss = hora.getSeconds(); 
  document.title = hora;
  var reloj = `${hh}:${mm}:${ss}`
  return reloj;
}

 function act(){
  var hora = hour(); 
  reloj = document.title = hora; 
  reloj.innerHTML = hora;   
}
setInterval(act,1000)


