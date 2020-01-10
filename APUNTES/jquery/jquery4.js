
// 4.  Realiza  el  mismo  código  que  en  el  script  3  pero  ahora  selecciona  
// dicho párrafomediante otro selector

$(document).ready(function (){
    $("button").click(function () {
         $("#segundo").hide();
         $("p.intro").hide();
    });
});


