
// 19.  Crea  un  documento  con un  botón  que  al  pulsarlo,  nosagregue  o  quite  la opacidad 
//  de  tres  elementos  div.  El  primero ejecútalo  sin  parámetros,  el segundo de manera lenta y el tercero en tres milisegundos.
$(document).ready(function(){
  $("button").first().click(function(){
    $("div:eq(0)").fadeToggle();
    $("div:eq(1)").fadeToggle('slow');
    $("div:eq(2)").fadeToggle(3000);
  });
  
});

