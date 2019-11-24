window.onload = () => {
    var valor = getCookie("contador");
    (valor === null)  ? setCookie('contador', 1) : setCookie('contador', ++valor);
    alert("Contador "+ valor);
}
function mostrarCookie(){
    document.getElementById("p").innerHTML = getCookie("contador");
}