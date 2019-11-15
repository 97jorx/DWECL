class Empleado {
    constructor(nombre, dep) {
        this._nombre = nombre || "";
        this._dep = dep || "General";
    }

    get getNombre(){
        return this._nombre;
    }

    get geDep(){
        return this.dep;
    }

}

let empleado = new Empleado('Jorge', "");
console.log(empleado.getNombre);


class Director extends Empleado {
    constructor(nombre, dep) {
        super(nombre, dep)
        this._informes = [];
    }


    


}

let director = new Director('Director', "");
console.log(director.getNombre);


class Trabajador extends Empleado {
    constructor(nombre, dep) {
        super(nombre, dep)
        this._proyectos = [];
    }
   
    get getMaquina(){
        return this._maquina;
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
    
    get getMaquina(){
        return this._maquina;
    }

    get getIngieneria(){
        return this._ingieneria;
    }
}

let ingeniero = new Ingeniero('Ingeniero', "1");
console.log(ingeniero.getIngieneria);