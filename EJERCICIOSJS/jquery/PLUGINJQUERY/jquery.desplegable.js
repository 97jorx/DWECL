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
        menu2 = lvl++;
        if (!p.length) {
            $.error(`Error: no se le ha pasado un id como padre`);
        }
        listau = $('<ul/>').addClass(`listaul${lvl}`)
            .attr('id', `ulId${lvl}`).appendTo(p);

        if (!($.isNumeric(`${n}`))) {
            $.error(`Error: el número de secciones a crear es inválido`);
        } else {
            i = 0;
            while (n > i) {
                li = $('<li/>').addClass(`listali${lvl}`)
                    .attr('id', `liId${i + 1}${lvl}`).appendTo(listau);

                a = $('<a/>').addClass(`enlacea${lvl}`)
                    .attr('id', `seccionId${i + 1}${lvl}`)
                    .text(`Seccion${i + 1}`).appendTo(li);

                div = $('<div/>').addClass(`subsec${lvl}`)
                    .attr('id', `subsecId${i + 1}${lvl}`).appendTo(li);
                i++;
            }

            $(`li > div`).hide();
            $("li").each(function () {
                $(this).hover(
                    function () { $(this).children('div').fadeIn(500); },
                    function () { $(this).children('div').fadeOut(500); });
            });

        }
    },
    agregarSubseccion: function (idsub, enlaceid, nombre) {
        if ($(`#${enlaceid}`).length) {
            $.error(`Error: el ID del ${enlaceid} ya existe`);
        } else {
            a2 = $('<a/>').addClass(`enlacea${lvl}`).attr('id', `${enlaceid}`)
                .text(`${nombre}`).appendTo(`#${idsub}`);
        }
    },
    agregarSeccion: function (nombre, idli, ida, iddiv) {
        listau = $(`#ulId${lvl}`);
        li = $('<li/>').addClass(`listali${lvl}`)
            .attr('id', `${idli}${lvl}`).appendTo(listau);

        a2 = $('<a/>').addClass(`enlacea${lvl}`)
            .attr('id', `${ida}${lvl}`)
            .text(`${nombre}`).appendTo(li);

        div = $('<div/>').addClass(`subsec${lvl}`)
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













