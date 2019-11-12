class Empleado {
    constructor(nombre, dep) {
        this._nombre = nombre || "";
        this._dep = dep || "General";
    }

    get nombre(){
        return this._nombre;
    }

    get dep(){
        return this._dep;
    }

}

let empleado = new Empleado('Jorge', "");
console.log(empleado.nombre);

class Director extends Empleado {
    constructor(nombre, dep) {
        super(nombre, dep)
        this._informes = [];
    }

  
}

let director = new Director('Director', "");
console.log(director.nombre);


class Trabajador extends Empleado {
    constructor(nombre, dep) {
        super(nombre, dep)
        this._proyectos = [];
    }
   
   
}

let trabajador = new Trabajador('Trabajador', "");
console.log(trabajador.nombre);


class Ingeniero extends Trabajador {
    constructor(nombre, ingieneria) {
        super(nombre)
        this._ingieneria = ingieneria;
        this._maquina = "";

    }
    
    get ingieneria(){
        return this._ingieneria;
    }
}

let ingeniero = new Ingeniero('Ingeniero', "1");
console.log(ingeniero.ingieneria);