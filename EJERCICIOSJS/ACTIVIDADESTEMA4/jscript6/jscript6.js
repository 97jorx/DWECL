

function aleatorios() {
    var arr = [];
    var arrsum = 0;
    var buscado = document.getElementById("i1").value;
    var index = 0;
    for (let i = 0; i <= 21; i++) {
        if (i % 2 != 0) {
            arr.push(i);
            arrsum += i;
        }
    }
    index = arr.indexOf(parseInt(buscado));
    document.getElementById("o1").value = parseInt(arrsum);
    document.getElementById("o3").value = (index != -1) ? arr[index] = "" : document.getElementById("o3").value = "No se ha encontrado";
    document.getElementById("o4").value = arr.toString();
    document.getElementById("o2").value = arr.reverse().toString();
    document.getElementById("o6").value = document.getElementById("o4").value;
}


