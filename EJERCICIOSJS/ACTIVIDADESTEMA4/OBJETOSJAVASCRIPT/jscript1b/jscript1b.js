function Coche(marca, modelo, color, anio) {
    this.marca = marca;
    this.modelo = modelo ;
    this.color = color;
    this.anio = anio;
}

var c1 = new Coche("Ferrari", "Scaglietti", "Rojo", "2010")
var c2 = new Coche("BMW", "Z4", "Blanco", "2010")
var c3 = new Coche("Seat", "Toledo", "Azul", "1999")
var c4 = new Coche("Fiat", "500", "Verde", "1995")

function mostrar(objeto){
    var tabla = document.getElementById('tabla');
    var fila = tabla.insertRow(tabla.length);
    var i = 0;
    for (var key in objeto) {
        if (objeto.hasOwnProperty(key)) {  
            var celda = fila.insertCell(i++)
            celda.innerHTML = `${objeto[key]}`;
        }
      }
   }

mostrar(c1);
mostrar(c2);
mostrar(c3);
mostrar(c4);
