
function teclado() {
    document.addEventListener("keydown", combi);
}
var combinacion = "";
var combinacion2 = "";
function combi(e) {

    if (e.code == "ControlLeft") {
        combinacion = "Control +  "
    } else if (e.code == "ShiftLeft") {
        combinacion = "Shift +  "
    } else if (e.code == "AltLeft") {
        combinacion = "Alt +  "
    } else {
        if (isNaN(e.code)) {
            combinacion2 += "Se ha pulsado : " + e.key;
            document.getElementById("p2").innerHTML = combinacion2;
            combinacion2 = "";
            if (e.ctrlKey || e.shiftKey || e.altKey) {
                combinacion2 += "Se ha pulsado : " + combinacion + "Caracter " + e.key;
                document.getElementById("p2").innerHTML = combinacion2;
                combinacion2 = "";

            }

        }
    }
}





