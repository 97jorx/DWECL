
// 11. Disponer  un  div  de  800x70  píxeles.  Al  hacer  doble  clic  redimensionarlo  a 250x250  píxeles  y  si  se  hace  doble  clic  nuevamente  retornar  al  tamaño 800x70.

estado = true;

$(document).ready(() => {
    $('div').dblclick(function () {
        console.log('holaS')
        if (estado) {
            $('div').css("width", "250px");
            $('div').css("height", "250px");
            estado = false;
        } else if(!estado){
            $('div').css("width", "800px");
            $('div').css("height", "70px");
            estado = true;
        }
    });
});


