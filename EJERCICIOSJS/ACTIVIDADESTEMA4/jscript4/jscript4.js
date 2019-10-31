

function aleatorios() {
    var arr = [];
    var mayor = 0;
    var menor = 0;
    for (let i = 0; i < 1000; i++) {
        arr[i] = Math.floor(Math.random() * 1000);
        mayor = Math.max(...arr);
        menor = Math.min(...arr);
    }

    document.getElementById("o1").value = arr.toString();
    document.getElementById("o2").value = mayor;
    document.getElementById("o3").value = menor;

    for (let i = 0; i < 1000; i++) {
        if (arr[i] === mayor) {
            arr.splice(i, 1);
        }
        if (arr[i] === menor) {
            arr.splice(i, 1);
        }
    }
    var arr2 = arr;
    document.getElementById("o4").value = arr2;
}
