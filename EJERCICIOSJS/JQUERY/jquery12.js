
// 11. Disponer  un  div  de  800x70  píxeles.  Al  hacer  doble  clic  redimensionarlo  a 250x250  píxeles  y  si  se  hace  doble  clic  nuevamente  retornar  al  tamaño 800x70.

estado = true;

$(document).ready(() => {
    $('td').on({
        mouseover: function () {
            $(this).css("background-color", "red");
        }, 
        mouseout: function () {
            $(this).css("background-color", "white");
            console.log('hola')
        }
    })
});


