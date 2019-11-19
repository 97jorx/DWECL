

function Alumno(nombre, mensaje, color, asignatura, disponibilidad, dia) {
    this.nombre = nombre || "";
    this.mensaje = mensaje || "";
    this.color = color || "";
    this.asignatura = asignatura || "";
    this.disponibilidad = disponibilidad || "";
    this.dia = dia || "";
}

var formSelect = function (name){ 
    s =  document.getElementById(`${name}`);
    selected = s.options[s.selectedIndex].text;
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
        formRadio(), 
        formSelect('asignatura'), 
        formCheck('checkbox'), 
        formSelect('dia'))
}



var mostrarObjeto = function (object) {
    var mostrar = "";
    for (var key in object) {
        if (!object.hasOwnProperty(key)) continue;
        var obj = object[key];
        mostrar += `\n\t${key} : ${obj} `;
    }
    return mostrar;
}


function mailto(){
    window.open("mailto:"+formSelect('asignatura')+'@iesdonana.org'+'?cc='+formSelect('asignatura')+'@iesdonana.org'+'&subject=información'+'&body='+mostrarObjeto(enviar()));
}