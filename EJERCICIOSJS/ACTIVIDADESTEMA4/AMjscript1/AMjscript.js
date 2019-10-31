var paises =
    [['España', 'Madrid',
        ['Paella', 'Cocido', 'Salmorejo']],
    ['Francia', 'París',
        ['Fondue de queso', 'Crepes', 'Croissants']],
    ['Italia', 'Roma',
        ['Pasta', 'Pizzas', 'Helados']]];


function arrayalista() {
    for (let i = 0; i < paises.length; i++) {
        document.getElementById("unorder").innerHTML += `<li style="list-style: none";>${paises[i][0]}<ul>${ul(i)}</ul></li>`;
    }
}
var ul = function (i) {
    var ul2 = "";
    for (let j = 1; j < paises[i].length; j++) {
        ul2 += `<li style="list-style: none";>${paises[i][j]}</li>`;
    }
    return ul2;
}




var paises2 = [['España', ['Madrid', ['Paella', 'Cocido', 'Salmorejo']]],
['Francia', ['París', ['Fondue de queso', 'Crepes', 'Croissants']]],
['Italia', ['Roma', ['Pasta', 'Pizzas', 'Helados']]]];
function arrayalista2() {
    for (let i = 0; i < paises2.length; i++) {
        document.getElementById("order").innerHTML += `<li>${paises2[i][0]}</li><ol><li type="circle"> ${paises2[i][1][0]} ${ol(i)}</ol> </li>` 
    }
}
var ol = function (i) {
    var ol2 = "";
    for (let j = 1; j < paises2[i].length; j++) {
        ol2 += `<li type="circle">${paises2[i][1][j]}</li>`
    }
    return ol2;
}

arrayalista();
arrayalista2();