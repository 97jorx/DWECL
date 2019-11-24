


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
     }
     
}





