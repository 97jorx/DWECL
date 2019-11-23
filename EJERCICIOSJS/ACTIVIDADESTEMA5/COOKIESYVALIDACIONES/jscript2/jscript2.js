


function validar(input) {
     var elemento = document.getElementById(input.id);
     var errores = document.getElementsByTagName('p');
     console.log(elemento);
     if (elemento.checkValidity()){
          elemento.style.borderColor = 'green';
          if(elemento.value == ""){
               elemento.style.borderColor = 'red';
          }
     } else {
          elemento.style.borderColor = 'red';
          for (let i = 0; i < errores.length; i++) {
               if (elemento.className == errores[i].className){
                    errores[i].hidden = false;
               } else if (elemento.className != errores[i].className) {
                    errores[i].hidden = true;
               }
          }
     }
     
}





