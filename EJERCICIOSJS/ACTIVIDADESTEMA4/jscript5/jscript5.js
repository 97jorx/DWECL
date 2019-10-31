

function aleatorios() {
    var arr = [];
    var mayor = 0;
    var menor = 0;
    for (let i = 0; i < 1000; i++) {
        arr[i] = Math.floor(Math.random() * 999)+1;
    }
    mayor = Math.max(...arr);
    menor = Math.min(...arr);

    document.getElementById("o1").value = arr.toString();
    document.getElementById("o2").value = mayor;
    document.getElementById("o3").value = menor;

    arr.shift();
    arr.pop();
    var arr2 = arr;
    document.getElementById("o4").value = arr2;
}
