


var valid = [/[0-9]{2}\.[0-9]{3}\.[0-9]{3}\-[^ñiouÑIOU]?$/g,
            /^a-zA-Z]+ ||[a-zA-Z]+ [a-zA-Z]{1,4}/g,
            /^[0-9]{2}[\/][0-9]{2}[\/][0-9]{4}$/g,
            /\S+@\S+\.\S+/g,
            /^(http)\/\/[w*].[^\s]*$/g,
            /[a-zA-Z]{8,10}/g,
            /[a-zA-Z]{8,10}/g]



function comprobar() {
    let valor = ['Dni', 'Nombre',
                 'F.Nac', 'E.Mail',
                 'Pag. Web', 'Contraseña', 
                 'Confirmar contraseña'];
    elements = document.getElementsByTagName("input")
    for (var i = 0; i < elements.length; i++) {
        if (elements[i].value == "") {
            alert(valor[i] + ' vacío');
        } else if (valid[i].test(elements[i].value)) {
            alert(valor[i] + ' válido');
        } else {
            alert(valor[i] + ' inválido');
        }
    }

}
