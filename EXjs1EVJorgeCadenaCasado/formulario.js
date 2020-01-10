

var correcto = true;

document.getElementById('jugar').onclick = () => {
    window.open("ajedrez.html", 'WindowAjedrez')
}



document.getElementById('send').onclick = () => {
    var mensaje = document.getElementById('mensaje').value;
    var correcto = true;

    if (mensaje != '') {
       alert("Válido mensaje")
    } else {
        alert("El mensaje no puede estar vacío es inválido")
        //document.getElementById('send').hidden = true;
        correcto = false;
    }

    var valid = /^[a-zA-Z]*@[a-zA-Z]{5}.[a-zA-Z]{3}/g
    var email = document.getElementById('email').value;
    
    if (valid.test(email)) {
        alert("Valido correo")
    } else {
        alert("El correo electrónico es inválido")
        //document.getElementById('send').hidden = true;
        correcto = false;
    }


    var valid1 = /^(0[0-9]|1[0-9]|2[0-3]|[0-9]):[0-5][0-9]$/g
    var time = document.getElementById('tiempo').value;
    
    if (valid1.test(time)) {
        alert("Correcto tiempo")
        
    }


    if(correcto){
    window.open("mailto:" + email + '?cc=' +
        "Ajedrez 2 jugadores" + '' + '&subject=información' + '&body=' + mensaje);
    }
}


