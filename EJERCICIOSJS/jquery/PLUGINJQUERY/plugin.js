
$(document).ready(function () {
    
    $('#padre').desplegable('empezar','5');
    //$('#padre').desplegable('empezar','2') // SUBMENU (TEST)
    $().desplegable('agregarSubseccion','subseccionId1','idprojo',"loquequiera");
    $().desplegable('cambiarNombre','seccionId11', 'Quienes somos');
    $().desplegable('cambiarNombre','seccionId21', 'Productos');
    $().desplegable('cambiarNombre','seccionId31', 'Pedidos');
    $().desplegable('cambiarNombre','seccionId41', 'Facturación');
    $().desplegable('cambiarNombre','seccionId51', 'Contacto');
    
    $().desplegable('agregarSubseccion','subsecId21','TipoA',"Tipo A");
    $().desplegable('agregarSubseccion','subsecId21','TipoB',"Tipo B");
    $().desplegable('agregarSubseccion','subsecId21','TipoC',"Tipo C");

    $().desplegable('agregarSubseccion','subsecId31','nuevo',"Nuevo");
    $().desplegable('agregarSubseccion','subsecId31','pedidos',"Consulta");
    $().desplegable('agregarSubseccion','subsecId31','consulta',"Totales");
    
    $().desplegable('agregarSubseccion','subsecId41','nuevaf',"Nueva");
    $().desplegable('agregarSubseccion','subsecId41','pedidosf',"Consulta");
    $().desplegable('agregarSubseccion','subsecId41','consultaf',"Totales");
    
    $().desplegable('agregarSubseccion','subsecId12','nuevaf2',"Nueva");
    $().desplegable('agregarSubseccion','subsecId22','pedidosf2',"Consulta");
    $().desplegable('agregarSubseccion','subsecId32','consultaf2',"Totales");
    
    $('#subsecId41').desplegable('empezar','2');
    $('#padre').desplegable('agregarSubseccion','subsecId22','otroid',"Esto es una prueba");

    //$('#padre').desplegable('eliminarRecursivo','subsecId41');

    //TESTERROR    $('#padre').desplegable('agregarSubseccion','asgasgsa','consultaf',"Totales");
})




