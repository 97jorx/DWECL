
// 17. Crea un documento con un botón que al pulsarlo, agregue la opacidad de
// tres elementos div. El primero ejecútalo sin parámetros, el segundo de manera
// lenta y el tercero en tres milisegundos. 

$(document).ready(function(){
    $("button").click(function(){
      $("div:eq(0)").fadeIn();
      $("div:eq(1)").fadeIn('slow');
      $("div:eq(2)").fadeIn(3000);
    });
});

