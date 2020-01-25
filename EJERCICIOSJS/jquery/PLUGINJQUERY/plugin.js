
$(document).ready(function () {
    //$('<ul/>').addClass('listau').attr('id','padre').appendTo(document.body);
    $('#padre').desplegable('empezar','5','padre');
    $('#padre').desplegable('agregarSubseccion','subseccionId1','idprojo',"loquequiera");
    $('#padre').desplegable('agregarSeccion','Prueba','listaprueba', "enlaceprueba", "divprueba");
    $('#padre').desplegable('agregarSubseccion','divprueba','idprojo2',"loquequiera2");
    //$().desplegable('eliminarRecursivo','liId12');
    //$('#padre').desplegable('empezar','5','subseccionId5');
})



