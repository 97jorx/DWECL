
$(document).ready(function () {
    
    $('#padre').desplegable('empezar','5');
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


// ----------------------------


    $('#hola').desplegable('empezar','5');
    $().desplegable('agregarSubseccion','subseccionId1','idprojo',"loquequiera");
    $().desplegable('cambiarNombre','seccionId13', 'Pepito');
    $().desplegable('cambiarNombre','seccionId23', 'Juanito');
    $().desplegable('cambiarNombre','seccionId33', 'Jorgito');
    $().desplegable('cambiarNombre','seccionId43', 'Paquito');
    $().desplegable('cambiarNombre','seccionId53', 'Joselito');
    
    $().desplegable('agregarSubseccion','subsecId23','TipoA3',"Tipo A");
    $().desplegable('agregarSubseccion','subsecId23','TipoB3',"Tipo B");
    $().desplegable('agregarSubseccion','subsecId23','TipoC3',"Tipo C");

    $().desplegable('agregarSubseccion','subsecId33','nuevo3',"Nuevo");
    $().desplegable('agregarSubseccion','subsecId33','pedidos3',"Consulta");
    $().desplegable('agregarSubseccion','subsecId33','consulta3',"Totales");
    
    $().desplegable('agregarSubseccion','subsecId43','nuevaff',"Nueva");
    $().desplegable('agregarSubseccion','subsecId43','pedidosff',"Consulta");
    $().desplegable('agregarSubseccion','subsecId43','consultaff',"Totales");
    
    $().desplegable('agregarSubseccion','subsecId14','nuevaf4',"Nueva");
    $().desplegable('agregarSubseccion','subsecId24','pedidosf4',"Consulta");
    $().desplegable('agregarSubseccion','subsecId34','consultaf4',"Totales");

    $('#subsecId43').desplegable('empezar','2');


})




