
function setCookie(name, value, expires, path, domain, secure) {
    document.cookie = name + "=" + encodeURIComponent(value) +
    ((expires == null) ? "" : "; expires=" + expires.toUTCString()) +
    ((path == null) ? "" : "; path=" + path) +
    ((domain == null) ? "" : "; domain=" + domain) +
    ((secure == null) ? "" : "; secure");
}

function getCookie(nombreCookie) {
    var nombre = nombreCookie + "=";
    var cookieArray = document.cookie.split(';');
    for (var i = 0; i < cookieArray.length; i++) {
        var parteCookie = cookieArray[i];
        while (parteCookie.charAt(0) == ' ') {
            parteCookie = parteCookie.substring(1);
        }
        if (parteCookie.indexOf(nombre) == 0) {
            return parteCookie.substring(nombre.length, parteCookie.length);
        }
    }
    return "";
}

window.onload = () => {
    var valor = getCookie("contador");
    if (valor === null) {
        setCookie('contador', 1);
    } else {
        setCookie('contador', valor++);
    }
    alert("Contador "+ valor);
}

function mostrarCookie(){
    document.getElementById("p").innerHTML = getCookie("contador");
}