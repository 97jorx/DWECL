
//10.  Crear  un  documento  con  una  tabla.  Poner  el  fondo  de  las  filas  pares  en rojo  (usar  el  método  .css("background-color","red").
//  A  continuación  poner el fondo de las filas impares en verde .css("background-color","green"

$(document).ready(function (){
    $("button").click(function () {
        $("tr:odd").css('background-color',"red");  
        $("tr:even").css('background-color',"green");  
    });
});


