
$(document).ready(function () {
    
    $('#padre').desplegable('empezar','5','padre');
    $('#divprueba').desplegable('empezar','2','divprueba')
    $('#padre').desplegable('agregarSubseccion','subseccionId1','idprojo',"loquequiera");
   // $().desplegable('agregarSeccion','Prueba','listaprueba', "enlaceprueba", "divprueba");
    //$().desplegable('agregarSubseccion','subsecId1','idprueba',"Quienes somos");
    $('#padre').desplegable('cambiarNombre','seccionId1', 'Quienes somos');
    $('#padre').desplegable('cambiarNombre','seccionId2', 'Productos');
    $('#padre').desplegable('cambiarNombre','seccionId3', 'Pedidos');
    $('#padre').desplegable('cambiarNombre','seccionId4', 'Facturación');
    $('#padre').desplegable('cambiarNombre','seccionId5', 'Contacto');
    
    $('#padre').desplegable('agregarSubseccion','subsecId2','TipoA',"Tipo A");
    $('#padre').desplegable('agregarSubseccion','subsecId2','TipoB',"Tipo B");
    $('#padre').desplegable('agregarSubseccion','subsecId2','TipoC',"Tipo C");

    $('#padre').desplegable('agregarSubseccion','subsecId3','nuevo',"Nuevo");
    $('#padre').desplegable('agregarSubseccion','subsecId3','pedidos',"Consulta");
    $('#padre').desplegable('agregarSubseccion','subsecId3','consulta',"Totales");

    $('#padre').desplegable('agregarSubseccion','subsecId4','nuevaf',"Nueva");
    $('#padre').desplegable('agregarSubseccion','subsecId4','pedidosf',"Consulta");
    $('#padre').desplegable('agregarSubseccion','subsecId4','consultaf',"Totales");
})




