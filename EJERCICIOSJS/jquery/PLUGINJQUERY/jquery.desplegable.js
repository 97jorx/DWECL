jQuery.fn.desplegable = function (metodo) {

    if (methods[metodo]) {
        return methods[metodo].apply(this, Array.prototype.slice.call(arguments, 1));
    } else if (typeof metodo === 'object' || !metodo) {
        return methods.init.apply(this, arguments);
    } else {
        $.error('Método ' + metodo + ' no existe jQuery.desplegable');
    }
    return this;
};

var methods = {
    empezar: function (n, padre) {
        var listau = $(padre +':eq(0)');
        var i = 0;
        while (n > i) {
            li = $('<li/>').addClass('listali')
                .attr('id', `liId${i + 1}`).appendTo(listau);
            a = $('<a/>').addClass('enlacea')
                .attr('id', `aId${i + 1}`)
                .text(`Seccion${i + 1}`).appendTo(li);
            div = $('<div/>').addClass('subseccion')
                .attr('id', `subseccionId${i + 1}`).appendTo(li);
            p = $('<p/>').addClass('parrafo')
                .attr('id', `parrafoId${i + 1}`).text(`Parrafo${i + 1}`)
                .appendTo(div);
            i++;
        }
    },
    agregarSubseccion: function (sub, parrafo, nombre) {
        if ($(`#${parrafo}`).length) {
            console.error(`Error: el ID del ${parrafo} ya existe`);
        } else {
            var p = $('<p/>').addClass('parrafo').attr('id', `${parrafo}`)
                .text(`${nombre}`).appendTo(`#subseccionId${sub}`);
        }
    },

    eliminarSubseccion: function (id) {
         $(`#${id}`).remove() 
    },

    agregarSeccion: function (nombre, padre,idli, ida, iddiv, ) {
        listau = $('#idul').prop('id');
        li = $('<li/>').addClass('listali')
            .attr('id', `${idli}`).appendTo(listau);
        a = $('<a/>').addClass('enlacea')
            .attr('id', `${ida}`)
            .text(`${nombre}`).appendTo(li);
        div = $('<div/>').addClass('subseccion')
            .attr('id', `${iddiv}`).appendTo(li);
    },

    eliminarSeccion: function () {
        
    },

};













