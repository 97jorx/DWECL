
//16. Crea un documento con un botón que al pulsarlo, oculte un párrafo con
// velocidad rápida.

$(document).ready(function(){
    $("button").click(function(){
      $("p").hide(0);
    });
});

