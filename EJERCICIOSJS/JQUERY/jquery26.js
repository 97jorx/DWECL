//26. Crear un programa que al pulsar en un botón se mueva un cuadrado 100
//px a la derecha y si dentro del cuadrado pone HELLO aumente el tamaño de la
//letra.


$(document).ready(function(){
  $('div:eq(0)').append('<p>HELLO</p>')
  $("button").click(function(){
    $('p:eq(0)').css("fontSize", 50);
    $("div:eq(0)").animate({right:'50%'});
  });
  
});



