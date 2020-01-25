
var datos = [['Quienes somos'],
['Productos', 'Tipo A', 'Tipo B', 'Tipo C'],
['Pedidos', 'Nuevo', 'Consulta', 'Totales'],
['Facturacion', 'Nueva', 'Consulta', 'Totales'],
['Contacto']]

var a = document.getElementsByTagName('a');
var li = document.getElementsByTagName('li');


for (let i = 0; i < datos.length; i++) {
    a[i].textContent = datos[i][0]
    var div = document.createElement('div');
    div.setAttribute('id', `subseccion${i + 1}`)
    div.style.display = 'none';
    li[i].appendChild(div);
    for (let j = 1; j < datos[i].length; j++) {
        var p = document.createElement('p');
        p.textContent = datos[i][j];
        div.appendChild(p)
    }
}


for (i = 0; i < li.length; i++) {
    li[i].onmouseover = ver;
    li[i].onmouseout = ocultar;
}


function ver() {
    ver = this.getElementsByTagName("div")[0];
    ver.style.display = "block"
}

function ocultar() {
    oculta = this.getElementsByTagName("div")[0];
    oculta.style.display = "none"
}






