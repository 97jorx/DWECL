

var btn = function (num) {

    if (isNaN(num)) {
        alert("Error : tiene que ser un número");
    }

    var general = (num * 1.21).toFixed(2);
    var reducido = (num * 1.10).toFixed(2);
    var sreducido = (num * 1.05).toFixed(2);
    var arr = [, general, reducido, sreducido];
    document.getElementById("o2").value = arr.toString();
}
