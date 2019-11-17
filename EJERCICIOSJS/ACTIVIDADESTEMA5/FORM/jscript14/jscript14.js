

function Profesor(nombre,correo) {
    this.nombre = nombre;
    this.correo = correo;
}

function Alumno(nombre, mensaje, color, asignatura, disponibilidad, dia) {
    this.nombre = nombre || "";
    this.mensaje = mensaje || "";
    this.color = color || "";
    this.asignatura = asignatura || "";
    this.disponibilidad = disponibilidad || "";
    this.dia = dia || "";
}

var formSelect = function (name) {
    var s = document.getElementById(`${name}`);
    return s.options[s.selectedIndex].text;
}
var formRadio = function () {
    var ele = document.getElementsByName("color");
    var result = "";
    for (i = 0; i < ele.length; i++) {
        if (ele[i].checked)
            result = ele[i].value;
    }
    return result;
}
var formCheck = function (nameclass) {
    var arrayCheckbox = [];
    var ele = document.getElementsByClassName(`${nameclass}`);
    for (var i = 0; ele[i]; ++i) {
        if (ele[i].checked) {
            arrayCheckbox.push(ele[i].value);
        }
    }
    return arrayCheckbox;
}

function enviar() {
    var formNombre = document.forms["form1"]["nombre"].value;
    var formMensaje = document.forms["form1"]["area"].value;

    return new Profesor( ("Profesor de :"+formSelect('asignatura')), new Alumno(
        formNombre,
        formMensaje,
        formSelect('asignatura'),
        formRadio(),
        formCheck('checkbox'),
        formSelect('dia')));
}



var print2 = function (object) {
    var mostrar = "";
    for (var key in object) {
        if (!object.hasOwnProperty(key));
        var obj = object[key];
        mostrar += ` \n ${key} -> `
        for (var prop in obj) {
            if (!obj.hasOwnProperty(prop));
                mostrar += `\n\t${prop} : ${obj[prop]} `;
        }
    }
    return mostrar;
}



function consolelog() {
    console.log(print2(enviar()));
}