


window.onload = () => {
    var valor = getCookie("contador");
    if (valor === null) {
        setCookie('contador', 1);
    } else {
        setCookie('contador', ++valor);
    }
    alert("Contador "+ valor);
}

function mostrarCookie(){
    document.getElementById("p").innerHTML = getCookie("contador");
}