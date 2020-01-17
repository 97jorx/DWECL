
// 13. Utiliza los métodos focus() y blur() para cambiar el color de dos cuadros
// de texto cuando posicionamos el foco y cuando lo retiramos

estado = true;

$(document).ready(() => {
    $('input').on({
        focus: function () {
            $(this).css("background-color", "red");
        }, 
        blur: function () {
            $(this).css("background-color", "blue");
        }
    })
});


