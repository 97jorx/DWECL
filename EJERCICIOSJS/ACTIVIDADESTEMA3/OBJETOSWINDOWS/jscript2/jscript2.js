var siguiente = true;
function buscar() {
    var palabra = document.getElementById("input").value;
    while (siguiente) {
        if (window.find && palabra != "") {
            var encontrado = window.find(palabra);
            
            if (!encontrado) {
                alert("La palabra no ha sido encontrada o no hay mas coincidencias: " + palabra);
            }
        }
        else {
            alert("La palabra no puede estar vacía");
        }

        siguiente = confirm("¿ Quieres seguir buscando ?");
            if(siguiente){
                siguiente = true;
            } else{
                siguiente = false;
            }

    }
}
