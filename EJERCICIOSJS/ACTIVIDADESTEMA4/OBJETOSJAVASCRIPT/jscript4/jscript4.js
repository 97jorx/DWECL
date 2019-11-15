function Factura(cliente, elementos, info) {
    this.cliente = cliente;
    this.elementos = elementos;
    this.info = info;
}

function Cliente(nombre, direccion, telefono, nif) {
    this.nombre = nombre;
    this.direccion = direccion;
    this.telefono = telefono;
    this.nif = nif;
}
function Info(baseimponible, iva, total, pago) {
    this.baseimponible = baseimponible || 0;
    this.iva = iva || 21;
    this.total = total || 0;
    this.pago = pago || 'contado';
}

function Articulo(descripcion, cantidad, precio) {
    this.descripcion = descripcion;
    this.cantidad = cantidad;
    this.precio = precio;
}



var elementos = new Array();
var a1 = new Articulo("Descripcion1", 2, 50);
agregar(a1);


var cliente1 = new Cliente("Pepito", "Zandalucía", "666 666 666", "9999999D");
var info1 = new Info(100, 21, "", "");
var factura1 = new Factura(cliente1, elementos, info1);




function agregar(articulo) {
    elementos.splice(0, elementos.length)
    elementos.push(articulo);
}



function Empresa(nombre, direccion, telefono, cif) {
    this.nombre = nombre;
    this.direccion = direccion;
    this.cif = cif;
    this.telefono = telefono;
}


Factura.prototype.empresa;
factura1.empresa = new Empresa("Juanitos .SL", "CALLE 51", "777 777 777", "b5123541")

function calculaTotal(factura) {
    return factura['info'].total =
        (factura['info'].baseimponible
            * factura['elementos'][0].cantidad)
        * ((factura['info'].iva / 100) + 1)
}


function muestraTotal() {
    console.log("El total de la factura es : ", calculaTotal(factura1));
}

muestraTotal()























// PRUEBAS DE MOSTRAR PROPIEDADES QUE SON OBJETOS
// var mostrar = "";
// Object.getOwnPropertyNames(factura1).forEach((key) => console.log("Objeto : ", factura1[key]));
// console.log(mostrar)


var print2 = function (object) {
    var mostrar = "";
    for (var key in object) {
        if (!object.hasOwnProperty(key)) continue;
        var obj = object[key];
        mostrar += ` \n ${key} -> `
        for (var prop in obj) {
            if (!obj.hasOwnProperty(prop)) continue;
            if (Array.isArray(obj[prop])){
                mostrar += `\n\t${prop} : ${obj[prop][0]} `;
            } else{
                mostrar += `\n\t${prop} : ${obj[prop]} `;
            }
        }
    }
    return mostrar;
}
console.log(print2(factura1));


// arr.forEach( function(v, i) {
//     console.log(i + " : " + v);
// });

