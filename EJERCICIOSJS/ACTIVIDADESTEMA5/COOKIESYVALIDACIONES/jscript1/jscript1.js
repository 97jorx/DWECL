


var valid = [/[0-9]{2}\.[0-9]{3}\.[0-9]{3}\-[^ñiouÑIOU]?$/g,
            /^[a-zA-Z]+[ ][a-zA-Z]+([ ][a-zA-Z]+){0,2}$/g,
            /^[0-9]{2}[\/][0-9]{2}[\/][0-9]{4}$/g,
            /\S+@\S+\.\S+/g,
            /^(http)\/\/[w*].[^\s]*$/g,
            /[a-zA-Z]{8,10}/g,
            /[a-zA-Z]{8,10}/g]

var datos = [];

function comprobar() {
    let valor = ['Dni', 'Nombre',
                 'F.Nac', 'E.Mail',
                 'Pag. Web', 'Contraseña', 
                 'Confirmar contraseña'];
    let elements = document.getElementsByTagName("input")
    for (var i = 0; i < elements.length; i++) {
        if (elements[i].value == "") {
            alert(valor[i] + ' vacío');
        } else if (valid[i].test(elements[i].value)) {
            alert(valor[i] + ' válido');
            datos.push(elements[i].value);
            elements[i].style.borderColor = 'green';
        } else {
            alert(valor[i] + ' inválido');
            elements[i].style.borderColor = 'red';
            elements[i].value = "";
        }
    }

}

function ver(){
    alert(datos.toString());
}