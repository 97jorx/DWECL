function validar(input) {
     var elemento = document.getElementById(input.id);
     console.log(elemento);
     if (elemento.checkValidity()) {
          elemento.style.borderColor = 'green';
          mostrarError(elemento, true)
          if (elemento.value == "") {
               elemento.style.borderColor = 'red';
          }
     } else {
          elemento.style.borderColor = 'red';
          mostrarError(elemento, false)
     }
     
}

function mostrarError(e, hidden){
     var errores = document.getElementsByTagName('p');
     for (let i = 0; i < errores.length; i++) {
          if (e.className == errores[i].className) {
               errores[i].hidden = hidden;
          } 
     }
}




function recogerCookies(){
     var inputs = document.getElementsByTagName('input');
     var errores = document.getElementsByTagName('p');
     var prueba = "";
     for (i = 0; i < inputs.length; i++) {
          if (validar(inputs[i]) && errores[i].hidden == false ) {
               prueba = document.getElementById(inputs[i].id);
               setCookie(inputs[i].id, prueba.value)     
               console.log(prueba.value);
               console.log(inputs[i].id.className)

          }
     }
}


function setCookie(nombre, valor, dias) {
     if (dias) {
         var fecha = new Date();
         fecha.setTime(fecha.getTime() + (dias * 24 * 60 * 60 * 1000));
         var caducidad = "; expires=" + fecha.toUTCString();
     }
     else var caducidad = "";
     document.cookie = nombre + "=" + valor + caducidad + "; path=/";
 }

function getCookie(nombreCookie) {
     var nombre = nombreCookie + "=";
     var cookieArray = document.cookie.split(';');
     for (var i = 0; i < cookieArray.length; i++) {
          var parteCookie = cookieArray[i];
          while (parteCookie.charAt(0) == ' ') {
               parteCookie = parteCookie.substring(1);
          }
          if (parteCookie.indexOf(nombre) == 0) {
               return parteCookie.substring(nombre.length, parteCookie.length);
          }
     }
     return "";
}



function mostrarCookie() {
     var mostrar = "";
     var inputs = document.getElementsByTagName('input');
     for (let i = 0; i < inputs.length; i++) {
          mostrar += `${inputs[i].id} = ${getCookie(inputs[i].className)} : ${getCookie(inputs[i].value)}`
     }
     alert(mostrar);
}