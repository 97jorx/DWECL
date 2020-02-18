$(document).ready(() => {
    letras = ['A','E','I','O','U'];
    $("#sortable").sortable();
    $("#sortable").disableSelection();
    $("#perdiste").dialog({
        autoOpen: false,
        modal: false,
        dialogClass: 'pdialog',
        title: 'HAS PERDIDO',
        show: "blind",
        hide: "blind",
    });
    $("#ganaste").dialog({
        autoOpen: false,
        modal: false,
        dialogClass: 'gdialog',
        title: 'HAS GANADO',
        show: "blind",
        hide: "blind",
    });
    
    for(let i = letras.length - 1; i > 0; i--){
        const j = Math.floor(Math.random() * 4)
        const temp = letras[i]
        letras[i] = letras[j]
        letras[j] = temp
    }

    $('.draggable').each((i) => {
        $(`#${i}`).text(letras[i])
    });

    intentos = 2, i = 0;
    combinacion = "";
    $("#boton").click(() => {
        combinacion += $(".draggable").text();
        if (combinacion == "AEIOU") {
            $("#ganaste").dialog("open");
            intentos = 2;
        } else {
            intentos = intentos - 1;
        }
        if (intentos === 0) {
            $("#perdiste").dialog("open");
            intentos = 2;
        }
        combinacion = "";
    });

});

