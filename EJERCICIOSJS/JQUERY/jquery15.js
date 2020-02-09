
// 15. Crea un documento con dos tag div, dentro de cada uno de los cuales debe
// haber un botón para esconder dichos tag.

$(document).ready(() => {
    $("div:eq(0) > button").click(function () {
        $("div:nth-of-type(1)").hide();
    });
    $("div:eq(1) > button").click(function () {
        $("div:nth-of-type(2)").hide();
   });
});

