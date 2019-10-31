
var arr = [];
function palabras() {
    arr.push(document.getElementById("i1").value);
    document.getElementById("o1").value = arr.toString();
    document.getElementById("o2").value = arr.reverse().toString();
    document.getElementById("o3").value = arr[arr.length-1];
    document.getElementById("o4").value = arr.length;
    document.getElementById("o5").value = arr.sort();
    document.getElementById("o6").value = deZaA(arr);
}

function deZaA(arr) {
    return arr.sort(function(a, b) {
        return b.localeCompare(a);
    });
  }