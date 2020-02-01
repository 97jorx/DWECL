$(document).ready(function () {
    $("#formulario").validate({
        rules: {
            //los name de los elementos
            nombre: {
                required: true
            },
            cpostal: {
                required: true,
                digits: true,
                minlength: 5,
                maxlength: 5
            },
            telefono: {
                required: true,
                digits: true,
                minlength: 9,
                maxlength: 9
            },
            email: {
                email: true,
                required: true
            },
            
        },
        messages: {
            nombre: "Por favor, inserte su nombre",
            email: "Por inserte un mail válido",
            telefono: "Inserte un número de telefono válido",
            cpostal: {
                required: "Debe introducir su CP",
                number: "Sólo puede escribir números",
                minlength: "Debe introducir al menos 9 dígitos"
            },
        },
        submitHandler: function () {
            alert("Incorrecto!");
        }
    });
});