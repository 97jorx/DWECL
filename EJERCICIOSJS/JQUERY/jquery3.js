
// 3. En el mismo documento HTML anterior. Suponemos que el encabezado y el primer  
// párrafo  tienen  el  atributo  class=”intro”.Deberás  ocultar  al  clickar  el botón, dicho párrafo.

$(document).ready(function (){
    $("button").click(function () {
         $("p.intro").hide();
    });
});


