jQuery.fn.desplegable = function (metodo) {
    $('.listali').on({
        mouseout: function () {
          $('div', this).slideUp(3000);
        },
        mouseenter: function () {
          $('div', this).fadeIn('fast');
          
        }
      });
    
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
        p = $(`#${padre}`);
        listau = $('<ul/>').addClass('listaul')
            .attr('id', `ulId1`).appendTo(p);
        i = 0;
        while (n > i) {
            li = $('<li/>').addClass('listali')
                .attr('id', `liId${i + 1}`).appendTo(listau);
            a = $('<a/>').addClass('enlacea')
                .attr('id', `aId${i + 1}`)
                .text(`Seccion${i + 1}`).appendTo(li);
            div = $('<div/>').addClass('subseccion')
                .attr('id', `subseccionId${i + 1}`).appendTo(li);
            a2 = $('<a/>').addClass('enlacea')
                .attr('id', `aId${i + 1}`).text(`Enlace${i + 1}`)
                .appendTo(div);
            i++;
        }
    },
    agregarSubseccion: function (sub, enlaceid, nombre) {
        if ($(`#${enlaceid}`).length) {
            console.error(`Error: el ID del ${parrafo} ya existe`);
        } else {
            a2 = $('<a/>').addClass('enlacea').attr('id', `${enlaceid}`)
                .text(`${nombre}`).appendTo(`#${sub}`);
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

};













