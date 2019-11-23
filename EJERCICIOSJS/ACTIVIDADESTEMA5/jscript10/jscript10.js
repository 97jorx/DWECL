

var img = document.getElementById("img");
var parar = document.getElementById("parar");
var cargar = document.getElementById("cargar");


function error() {
    document.getElementById("p").innerHTML = "Se ha producido un error."
    correcto = false;
}

function abortar() {
    alert("Se ha abortado la carga de la imagen");
}

function cargarimagen() {
    document.getElementById("p").innerHTML = "Se ha cargado correctamente";
}

parar.addEventListener("click", function () {
    img.src = ""
});


cargar.addEventListener("click", function () {
    img.src = "poster.jpg";
});
