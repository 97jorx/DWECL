$(document).ready(function () {
    $("#formulario").validate({
        rules: {
            nombre: {
                mayus: true,
                required: true
            },
            cpostal: {
                required: true,
                digits: true,
                minlength: 5,
                maxlength: 5
            },
            telefono: {
                telf: true,
                minlength: 9
            },
            email: {
                email: true,
                required: true
            },
            
        },
        messages: {
            nombre: {
                required: "Se debe introducir un nombre",
                mayus: "La primera letra debe ser mayúscula",
            },
            email: { 
                required: "Por inserte un mail válido",
                email: "El email introducido es inválido"
            },
            telefono: {
                telf: "El número introducido no es válido",
                required: "Se debe introducir un número de telefono",
                minlength: "La longitud minima del numero es 9"
            },
            cpostal: {
                required: "Debe introducir su CP",
                number: "Sólo puede escribir números",
                minlength: "Debe introducir al menos 9 dígitos"
            },
        },
        submitHandler: function () {
            alert("Correcto!");
        }
    });
});


$.validator.addMethod("mayus", function(value, element) {
    return this.optional(element) || /^[A-Z]+/.test(value); 
});


$.validator.addMethod("telf", function(value, element) {
    return this.optional(element) || /^[0-9]{3}-[0-9]{6}$/gm.test(value); 
});


$.validator.addMethod("email", function(value, element) {
    return this.optional(element) || /^[a-zA-Z]{3}.*@[a-zA-Z]{4}.[a-zA-Z]{3}/g.test(value); 
});