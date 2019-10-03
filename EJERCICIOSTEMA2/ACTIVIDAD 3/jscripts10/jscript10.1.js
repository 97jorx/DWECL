

function suma(a, b) {
    return (a + b);
}

function resta(a, b) {
    return (a - b);
}

function multiplicar(a, b) {
    return (a * b);
}

function dividir(a, b) {
    return (a / b);
}

function calc() {
    var op = document.getElementById("opcion").value;
    var operando1 = parseFloat(document.getElementById("text1").value);
    var operando2 = parseFloat(document.getElementById("text2").value);

    switch (op) {
        case '0':
            text = suma(operando1, operando2);
            break;

        case '1':
            text = resta(operando1, operando2);
            break;

        case '2':
            text = multiplicar(operando1, operando2);
            break;

        case '3':
            text = dividir(operando1, operando2);
            break;
        default:
            text = "Error inesperado";
    }

    document.getElementById("resul").value = text;

}




