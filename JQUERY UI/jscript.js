$(document).ready(() => {
    letras = ['A', 'E', 'I', 'O', 'U'];
    $("#sortable").sortable();
    $("#sortable").disableSelection();
    $("#perdiste").dialog({
        autoOpen: false,
        modal: true,
        dialogClass: 'pdialog',
        title: 'HAS PERDIDO',
        show: "blind",
        hide: "blind",
    });
    $("#ganaste").dialog({
        autoOpen: false,
        modal: true,
        dialogClass: 'gdialog',
        title: 'HAS GANADO',
        show: "blind",
        hide: "blind",
    });

    shuffle();
    intentos = 2, i = 0;
    combinacion = "";
    $("#boton").click(() => {
        combinacion += $(".draggable").text();
        if (combinacion == "AEIOU") {
            $("#ganaste").dialog("open");
            shuffle();
            intentos = 2;
        } else {
            intentos = intentos - 1;
            $('#intentos').append(`<p>Intento ${intentos + 1}: ${combinacion}</p>`);
        }
        if (intentos === 0) {
            $("#perdiste").dialog("open");
            $("span").click(() => {
                $('#intentos').empty();
            });
            shuffle();
            intentos = 2;
        }
        combinacion = "";

    });


    function shuffle() {
        for (let i = letras.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * i)
            const temp = letras[i]
            letras[i] = letras[j]
            letras[j] = temp
        }
        $('.draggable').each((i) => {
            $(`#${i}`).text(letras[i])
        });
    }

});

