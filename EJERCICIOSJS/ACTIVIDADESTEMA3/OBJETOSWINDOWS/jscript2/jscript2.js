function buscar() {
    var palabra = document.getElementById("input").value;
    var contador = 0;
    var seguir = true;
    if (window.find && palabra != "") {
        var encontrado = window.find(palabra);
        contador++;
        (contador >= 1) ? seguir = confirm("¿ Quieres seguir buscando ?") : (seguir) ? true : encontrado = false;
        if (!encontrado) {
            alert("La palabra no ha sido encontrada o no hay mas coincidencias: " + palabra);
        }
    }
    else {
        alert("La palabra no puede estar vacía");
    }
}
