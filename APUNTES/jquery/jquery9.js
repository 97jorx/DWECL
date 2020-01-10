
//8.  Crea  un  documento  con  dos  enlaces.  Uno  se  tiene  que  abrir  en  una  nueva ventana (target="_blank") y el otro no.
// Debes situar un botónpara ocultar el enlace que se abre en una nueva ventana y
// otro botón para ocultar el que se abre en la misma ventana

$(document).ready(function (){
    $("#button1").click(function () {
        //$('a').attr('target', '_blank').hide();
        $('a[target="_blank"]').hide();  
    });
});

$(document).ready(function (){
    $("#button2").click(function () {
        $('a[target!="_blank"]').hide();  
    });
});
