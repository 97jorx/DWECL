//25. Crea un programa que al pulsar en un botón se muestre y se oculte la
//anchura de un cuadrado.



$(document).ready(function(){
  $("div:eq(0)").append('<p>'+
  $('div:eq(0)').width()+'</p>');
    $("button").click(function(){
      $("p:eq(0)").toggle();
    });
});

