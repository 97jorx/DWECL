


var alumnos = new Array();
for (let i = 0; i < 5; i++) {
    alumnos.push(new Array(3));
}


for (let i = 0; i < alumnos.length; i++) {
    for (let index = 0; index < alumnos[i].length; index++) {
        do {
            var n = prompt("Introduce las notas del alumno" + (i + 1));    
        } while (!(/^(\d|(\d\.\d)|10){1}$/).test(n))
        alumnos[i][index] = n;
    }
}


function mostrar() {
    var tabla = document.getElementById("tabla");
    for (let i = 0; i < alumnos.length; i++) {
        var nfila = tabla.insertRow(tabla.length);
        for (let j = 0; j < alumnos[i].length; j++) {
            var celda = nfila.insertCell(j);
            celda.innerHTML = alumnos[i][j];
        }
    }
}
