

function convertir() {
    var num1 = document.getElementById("numero1").value;
    var base1 = document.getElementById("base1").value;
    (num1 == " " || base1 == " ") ? console.log("Error : ningún campo debe de estar vacío")
        : console.log("Correcto");

    if (base1 == 2 || base1 == 8) {
        document.getElementById("btn1").value = parseInt(num1).toString(base1);
    } else {
        console.log("Base entre 2 , 8 ó 16");
    }
}

function convertir2() {
    var num2 = document.getElementById("numero2").value;
    var base2 = document.getElementById("base2").value;

    (num2 == "" || base2 == "") ? console.log("Error : ningún campo debe de estar vacío")
        : (hex) ? alert("Hex válido") : alert("Hex inválido");
    document.getElementById("btn2").value = parseInt(num2, parseInt(base2));
    console.log(num2);
    console.log(base2);
}

var hex = function () {
    regexp = /^[0-9a-fA-F]+$/gim;
    return regexp.test(num2.toString());
}





