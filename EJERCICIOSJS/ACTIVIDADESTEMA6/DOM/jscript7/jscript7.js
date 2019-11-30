var etiquetas = ['button'],
  netiquetas = ['Dimensión', 'Crear tabla', 'Añadir fila', 'Borrar fila'],
  body = document.body,
  td = document.getElementsByTagName('td'),
  fila = 0,
  col = 0;

// BOTONES
for (let i = 0; i < 4; i++) {
  botones = document.createElement(etiquetas[0]);
  botones.setAttribute("id", `btn${i+1}`);
  nombreBtn = document.createTextNode(netiquetas[i]);
  body.appendChild(botones);
  botones.appendChild(nombreBtn);
}

// PREGUNTAR FILA Y COLUMNA
document.addEventListener('load', dimension())
document.getElementById('btn1').addEventListener('click', dimension)
 function dimension() { fila = prompt("Introduce las filas");
                        col = prompt("Introduce las columnas")};


// CREAR TABLA
document.getElementById("btn2").onclick = () => {
   var idtabla = document.getElementById('table');
  if (idtabla) {
    (confirm("Ya hay una tabla creada, ¿ Quiere eliminarla ?")) ? idtabla.remove() : false;
  } else {
    var tabla = document.createElement('table');
    tabla.id = "table";
    tabla.className = "areatabla";
    body.appendChild(tabla);
    for (let i = 0; i < fila; i++) {
      var f = tabla.insertRow(i);
      for (var j = 0; j < col; j++) {
        f.insertCell(j);
      }
    }
  }
  agregarInput();
}

// AÑADIR FILA
document.getElementById("btn3").onclick = () => {
  if (!document.getElementById('table')) {
    alert("NO hay una tabla creada");
  } else {
    var f = table.insertRow(-1);
    for (let i = 0; i < col; i++) {
        f.insertCell(i);
    }
  }
  agregarInput();
}


// QUITAR FILA
document.getElementById("btn4").onclick = () => {
  if (!document.getElementById('table')) {
    alert("NO hay una tabla creada");
  } else {
    document.getElementById("table").deleteRow(-1);
  }
}


// FUNCION QUE AGREGA INPUTS DENTRO DE LOS TD
function agregarInput(){
  for (let i = 0; i < td.length; i++) {
    if (!td[i].hasChildNodes()) {
      td[i].appendChild(document.createElement('input'))
    }
  }
}