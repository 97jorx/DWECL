
// 5. Selecciona el tercer elemento de la primera lista y oculta dicho elemento. 

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
         $("#list1 li:nth-child(3)").hide();
    });
});


