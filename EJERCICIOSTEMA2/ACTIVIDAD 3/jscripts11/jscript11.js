
function calc() {
    var op = document.getElementById("opcion").value;
    var operando1 = parseFloat(document.getElementById("text1").value);
    var operando2 = parseFloat(document.getElementById("text2").value);

    switch (op) {
        case '1':
            text = suma(operando1, operando2);
            break;

        case '2':
            text = resta(operando1, operando2);
            break;

        case '3':
            text = multiplicar(operando1, operando2);
            break;

        case '4':
            text = dividir(operando1, operando2);
            break;
        case '5':
            text = logaritmo(operando1, operando2);
            break;
        case '6':
            text = raiz(operando1, operando2);
            break;
        case '7':
            text = coseno(operando1, operando2);
            break;
        case '8':
            text = elevado(operando1, operando2);
            break;
        case '9':
            text = tangente(operando1, operando2);
            break;
        case '10':
            text = exponente(operando1, operando2);
            break;
        case '11':
            text = binario(operando1);
            break;
        case '12':
            text = octal(operando1);
            break;
        case '13':
            text = hexadecimal(operando1);
            break;
        case '14':
            text = decimal(operando1);
            break;
        default:
            text = "Error inesperado";
    }


    if (!isNaN(operando1) && !isNaN(operando2) || operando1 != "" && operando2 != "") {
        document.getElementById("resul").value = text;
    } else {
        alert("Los operandos no son números");
    }

}


function suma(op1, op2) {
    return (op1 + op2);
}

function resta(op1, op2) {
    return (op1 - op2);
}

function multiplicar(op1, op2) {
    return (op1 * op2);
}

function dividir(op1, op2) {
    return (op1 / op2);
}

function logaritmo(op1) {
    return (Math.log(op1));
}

function raiz(op1) {
    return (Math.sqrt(op1));
}

function coseno(op1) {
    return (Math.cos(op1));
}

function elevado(op1, op2) {
    return (Math.pow(op1, op2));
}

function tangente(op1) {
    return (Math.tan(op1));
}

function exponente(op1) {
    return (Math.exp(op1));
}


function octal(op1) {
    return (op1.toString(8));
}

function binario(op1) {
    return (op1.toString(2));
}

function decimal(op1) {
    return (op1.toString(10));
}

function hexadecimal(op1) {
    return (op1.toString(16));
}



