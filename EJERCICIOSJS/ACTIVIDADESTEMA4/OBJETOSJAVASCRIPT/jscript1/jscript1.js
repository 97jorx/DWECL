// 1.Crear objeto Vehículo. 
// a.Crear constructor. 
// b.Crear propiedades: marca, modelo, color y año fabricación.
// c.Instanciar dos objetos. 
// d.Mostrar por pantalla una propiedad con notación por puntos. Objeto 1 - marca. 
// e.Mostrar por pantalla una propiedad con notación por corchetes. Objeto 2 - color. 
// f.Crear el método mostrarDatos.
// g.Crear un método que tenga argumentos acelerar(velocidad). Mostrará por pantalla que el coche ha acelerado a la velocidad pasada. 
// h.Crear un método con función interna arrancar. Mostrará por pantalla que el coche de marca _, modelo_, de color_ ha arrancado. 
// i.Asignar una nueva propiedad cilindrada.
// j.Asignar un nuevo método frenar. Mostrará por pantalla que el coche de marca_, modelo_, color_ ha parado). 
// k.Realizar las siguientes modificaciones en el Objeto 1 : la propiedad marca no podrá ser eliminadas, la propiedad modelo tendrá como valor por defecto ‘xx’ y no podrá ser modificado y los métodos no serán enumerables. 
// l.Borrar la propiedad marca, modificar la propiedad modelo y volver a mostrar los datos de Objeto 1. 
// m.Muestra  todas  las  propiedades  de  Objeto1  utilizando:  for  in  ,  Object.hasOwnPropertyNames(), Object.keys(). 


function Coche(marca, modelo, color, anio) {
    this.marca = marca;
    this.modelo = modelo ;
    this.color = color;
    this.anio = anio;

    this.arrancar = function () {
        return `El coche de marca ${this.marca}, modelo ${this.modelo}, de color ${this.color} ha arrancado`
    }

    this.frenar = function () {
        return `El coche de marca ${this.marca}, modelo ${this.modelo}, de color ${this.color} ha parado`
    }
}

Coche.prototype.mostrarDatos = function () {
    return `Marca -> ${this.marca}
            \nModelo -> ${this.modelo}
            \nColor -> ${this.color}
            \nAño -> ${this.anio}`
}

Coche.prototype.acelerar = function (velocidad) {
    return `El coche ${this.marca} esta acelerando a ${velocidad} km/h`
}

var c1 = new Coche("Ford", '', "Blanco", "1997");
Object.defineProperties(c1, {
    "modelo": {
        value: c1.modelo || "xx",
        writable:false
    },
    'acelerar':{
        enumerable: false
    },
    'frenar':{
        enumerable: false
    },
    'arrancar':{
        enumerable: false
    }
});
Object.defineProperty(c1, 'marca', { configurable: false });
console.log(c1.modelo);
console.log(c1.marca);
delete c1.marca;
console.log(c1.hasOwnProperty('marca'));




var c2 = new Coche("Audi", "R8", "Negro", "2017");
Coche.prototype.cilindrada;
c2.cilindrada = "5000";
console.log(c2.cilindrada);
console.log(c2.marca);
console.log(c2["color"]);
console.log(c2.mostrarDatos());
console.log(c2.acelerar(20))
console.log(c2.arrancar())
console.log(c2.frenar())


function mostrar(objeto){
    var mostrar = "";
    for (var key in objeto) {
        if (objeto.hasOwnProperty(key)) {
            mostrar += `${key} \t--> ${objeto[key]}\n`;
        }
      }
      return mostrar;
   }

console.log(mostrar(c1));
