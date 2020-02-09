
//21.  Crea  un  documento  con  dos  capas, 
// tal  que  al  pulsar sobre  la  primera  se despliegue hacia abajo la segunda. 

$(document).ready(function(){
    $("div:eq(0)").click(function(){
      $("div:eq(1)").animate({top: '250px'},"slow 0.4");
    });
});

