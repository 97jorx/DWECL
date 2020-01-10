
// 6. Oculta los terceroselementos de la lista del script 5.

// Lista 1:
//         ●Tortilla
//         ●Jamón
//         ●Queso
// Lista 2:
//         ■Coca Cola
//         ■Leche
//         ■Té

$(document).ready(function (){
    $("button").click(function () {
         $("ul li:nth-child(3)").hide();
    });
});


