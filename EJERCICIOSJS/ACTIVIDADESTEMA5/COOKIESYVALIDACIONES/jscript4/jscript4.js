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

function mostrarError(e, oculto) {
     var errores = document.getElementsByTagName('p');
     for (let i = 0; i < errores.length; i++) {
          if (e.className == errores[i].className) {
               errores[i].hidden = oculto;
          }
     }
}


function recogerCookies() {
     var inputs = document.getElementsByTagName('input');
     for (i = 0; i < inputs.length; i++) {
          if (inputs[i].checkValidity() !== false) {
               setCookie(inputs[i].id, inputs[i].value)
          }
     }
}


function mostrarCookie() {
     var mostrar = "";
     var inputs = document.getElementsByTagName('input');
     for (let i = 0; i < inputs.length; i++) {
          mostrar += `${getCookie(inputs[i].id)} : ${getCookie(inputs[i].value)}`
     }
     alert(mostrar);
}

function ver() {
     alert(datos.toString());
}