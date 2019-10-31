

function obtenerI(num, numtipo) {

    if (isNaN(num)) {
        alert("Error : tiene que ser un número");
    }
    var general = (num * 1.21).toFixed(2);
    var reducido = (num * 1.10).toFixed(2);
    var sreducido = (num * 1.05).toFixed(2);

    var numtipo1 = parseInt(numtipo);
    switch (numtipo1) {
        case 1:
            document.getElementById("o1").value = num;
            document.getElementById("o2").value = general;
            break;
        case 2:
            document.getElementById("o1").value = num;
            document.getElementById("o2").value = reducido;
            break;
        case 3:
            document.getElementById("o1").value = num;
            document.getElementById("o2").value = sreducido;
            break;
        default:
            alert("Error: no se ha encontrado el tipo");
    }


}
