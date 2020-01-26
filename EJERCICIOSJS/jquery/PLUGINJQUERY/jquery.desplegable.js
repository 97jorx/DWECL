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
    empezar: function (n, padre, nMenu = '') {
        p = $(`#${padre}`);
        listau = $('<ul/>').addClass('listaul')
            .attr('id', `ulId1`).appendTo(p);
        i = 0;
        while (n > i) {
            li = $('<li/>').addClass('listali')
                .attr('id', `liId${i + 1}`).appendTo(listau);
            a = $('<a/>').addClass('enlacea')
                .attr('id', `seccionId${i + 1}`)
                .text(`Seccion${i + 1}`).appendTo(li);
            div = $('<div/>').addClass('subsec')
                .attr('id', `subsecId${i + 1}`).appendTo(li);
            i++;
        }
        $('.listali').hover(
            function () { $(this).children('div').fadeIn(200); },
            function () { $(this).children('div').fadeOut(200); });
    },
    agregarSubseccion: function (idsub, enlaceid, nombre) {
        if ($(`#${enlaceid}`).length) {
            console.error(`Error: el ID del ${enlaceid} ya existe`);
        } else {
            a2 = $('<a/>').addClass('enlacea').attr('id', `${enlaceid}`)
                .text(`${nombre}`).appendTo(`#${idsub}`);
        }
    },
    agregarSeccion: function (nombre, idli, ida, iddiv) {
        listau = $(`#ulId1`);
        li = $('<li/>').addClass('listali')
            .attr('id', `${idli}`).appendTo(listau);
        a2 = $('<a/>').addClass('enlacea')
            .attr('id', `${ida}`)
            .text(`${nombre}`).appendTo(li);
        div = $('<div/>').addClass('subseccion')
            .attr('id', `${iddiv}`).appendTo(li);
    },

    eliminarElemento: function (id) {
        if (!$(`#${id}`).length) {
            console.error(`Error: el ID del ${id} no existe`);
        } else {
            $(`#${id}`).remove()
        }
    },
    eliminarRecursivo: function (id) {
        if (!$(`#${id}`).length) {
            console.error(`Error: el ID del ${id} no existe`);
        } else {
            $(`#${id}`).empty()
        }
    },
    cambiarNombre: function (id, nombre) {
        if (!$(`#${id}`).length) {
            console.error(`Error: el ID del ${id} no existe`);
        } else {
            $(`#${id}`).text(`${nombre}`);
        }
    },
};













