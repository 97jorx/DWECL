var ios = android = wind = otro = 0;
var arr = [ios, android, wind, otro];

function agregarVoto(nombre, v) {
     document.getElementById(nombre).style.width = v + '%';
}

function getCookieValue(nombre) {
     var v = "; " + document.cookie;
     var p = v.split("; " + nombre + "=");
     return p.pop()
    
}

document.getElementById('Votar').onclick = function () {
     var radios = document.getElementsByTagName('input');
     var barras = document.getElementsByTagName('div');

     for (let i = 0; i < radios.length; i++) {
          if (radios[i].checked) {
               setCookie(barras[i].id, ++arr[i]);
               agregarVoto(barras[i].id, getCookieValue(barras[i].id));
          }
     }
}








