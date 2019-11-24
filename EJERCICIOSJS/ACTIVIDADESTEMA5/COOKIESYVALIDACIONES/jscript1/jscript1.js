


var valid = [/[0-9]{2}\.[0-9]{3}\.[0-9]{3}\-[^ñiouÑIOU]?$/g,
            /^[a-zA-Z]+[ ][a-zA-Z]+([ ][a-zA-Z]+){0,2}$/g,
            /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/g,
            /^[a-zA-Z]*@[a-zA-Z]{5}.[a-zA-Z]{3}/g,
            /^http\/\/+[w]{3}[\.]+[a-z0-9]+[\.][a-z]{2,3}$/g,
            /[a-zA-Z]{8,10}/g,
            /[a-zA-Z]{8,10}/g]

var datos = [];

function comprobar() {
    let elements = document.getElementsByTagName("input")
    for (var i = 0; i < elements.length; i++) {
        if (elements[i].value == "") {
            alert(elements[i].id + ' vacío');
        } else if (valid[i].test(elements[i].value)) {
            alert(elements[i].id  + ' válido');
            datos.push(elements[i].value);
            elements[i].style.borderColor = 'green';
        } else {
            alert(elements[i].id  + ' inválido');
            elements[i].style.borderColor = 'red';
            elements[i].value = "";
        }
    }

}

function ver(){
    alert(datos.toString());
}


