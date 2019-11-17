

function Profesor(informacion) {
    this.informacion = informacion;
}



function Alumno(nombre, mensaje, color, asignatura, disponibilidad, dia) {
    this.nombre = nombre || "";
    this.mensaje = mensaje || "";
    this.color = color || "";
    this.asignatura = asignatura || "";
    this.disponibilidad = disponibilidad || "";
    this.dia = dia || "";
}

var formSelect = function (name){ 
    var s =  document.getElementById(`${name}`);
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
    var formNombre =  document.forms["form1"]["nombre"].value;
    var formMensaje = document.forms["form1"]["area"].value;
    
    return alumno = new Alumno(
        formNombre, 
        formMensaje, 
        formSelect('asignatura'), 
        formRadio(), 
        formCheck('checkbox'), 
        formSelect('dia'))
}



var print2 = function (object) {
    var mostrar = "";
    for (var key in object) {
        if (!object.hasOwnProperty(key)) continue;
        var obj = object[key];
        mostrar += `\n\t${key} : ${obj} `;
    }
    return mostrar;
}


function consolelog(){
    console.log(print2(enviar()));
}