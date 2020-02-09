// 27. Mejora el ejercicio 26 añadiendo cinco botones.
// 1. Empezar: Comienza la animación
// 2. Parar: Para la animación actual pero continúa con el resto.
// 3. Parar todo: Detiene todas las animaciones de inmediato.
// 4. Para pero terminar: Detiene la animación activa, pero acabándola
// primero y luego continua el resto.
// 5. Parar todo, pero terminar: Detiene las animaciones pero acabando
// primero la que se encuentra en ejecución.


$(document).ready(function(){
  $('div:eq(0)').append('<p>HELLO</p>')
  $("#emp").click(function(){
    $('p:eq(0)').animate({fontSize: '50px'}, 3000);
    $("div:eq(0)").animate({right:'50%'}, 3000);     
  });
  $("#para").click(function(){$("div:eq(0)").stop();});
  $("#parartodo").click(function(){
    $("div:eq(0)").stop(); 
    $("p:eq(0)").stop();
  });
  $("#parartodo2").click(function(){$("div:eq(0)").stop(false,true);});
  $("#parartodo3").click(function(){$("div:eq(0)").stop(true,true);});
});





