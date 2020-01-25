
$(document).ready(function () {
    //$('<ul/>').addClass('listau').attr('id','padre').appendTo(document.body);
    $('#padre').desplegable('empezar','5','ul');
    $('#padre').desplegable('agregarSubseccion','1','idprojo',"loquequiera");
    $('#padre').desplegable('agregarSeccion','Prueba','','listaprueba', "enlaceprueba", "divprueba");
    $().desplegable('eliminarSubseccion','idprojo');
})
