var lvl = 0;

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
    empezar: function (n) {
        p = $(`#${$(this).attr('id')}`);
        listau = $('<ul/>').addClass('listaul')
            .attr('id', `ulId1`).appendTo(p);
            console.log(this);
        menu2 = lvl++;
        if (!($.isNumeric(`${n}`))) {
            $.error(`Error: el número de secciones a crear es inválido`);
        } else {
            i = 0;
            while (n > i) {
                li = $('<li/>').addClass('listali')
                    .attr('id', `liId${i + 1}${lvl}`).appendTo(listau);
                a = $('<a/>').addClass('enlacea')
                    .attr('id', `seccionId${i + 1}${lvl}`)
                    .text(`Seccion${i + 1}`).appendTo(li);
                div = $('<div/>').addClass('subsec')
                    .attr('id', `subsecId${i + 1}${lvl}`).appendTo(li);
                i++;
            }
            $('.listali > div').hide();
            $('.listali').hover(
                function () { $(this).children('div').fadeIn(200); },
                function () { $(this).children('div').fadeOut(200); });     
        }
    },
    agregarSubseccion: function (idsub, enlaceid, nombre) {
        if ($(`#${enlaceid}`).length) {
            $.error(`Error: el ID del ${enlaceid} ya existe`);
        } else {
            a2 = $('<a/>').addClass('enlacea').attr('id', `${enlaceid}`)
                .text(`${nombre}`).appendTo(`#${idsub}`);
        }
    },
    agregarSeccion: function (nombre, idli, ida, iddiv) {
        listau = $(`#ulId1`);
        li = $('<li/>').addClass('listali')
            .attr('id', `${idli}${lvl}`).appendTo(listau);
        a2 = $('<a/>').addClass('enlacea')
            .attr('id', `${ida}${lvl}`)
            .text(`${nombre}`).appendTo(li);
        div = $('<div/>').addClass('subseccion')
            .attr('id', `${iddiv}${lvl}`).appendTo(li);
    },

    eliminarElemento: function (id) {
        if (!$(`#${id}`).length) {
            $.error(`Error: el ID del ${id} no existe`);
        } else {
            $(`#${id}`).remove()
        }
    },
    eliminarRecursivo: function (id) {
        if (!$(`#${id}`).length) {
            $.error(`Error: el ID del ${id} no existe`);
        } else {
            $(`#${id}`).empty()
        }
    },
    cambiarNombre: function (id, nombre) {
        if (!$(`#${id}`).length) {
            $.error(`Error: el ID del ${id} no existe`);
        } else {
            $(`#${id}`).text(`${nombre}`);
        }
    },
};













