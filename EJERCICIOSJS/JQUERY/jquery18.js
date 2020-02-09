
// 18. Crea un documento con un botón que al pulsarlo, nos quite la opacidad de tres elementos div. El primeroejecútalo sin parámetros, 
// el segundo de manera lenta y el tercero en tres milisegundos

$(document).ready(function(){
    $("button").click(function(){
      $("div:eq(0)").fadeOut();
      $("div:eq(1)").fadeOut('slow');
      $("div:eq(2)").fadeOut(3000);
    });
});

