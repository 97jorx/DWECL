class Pieza {

    constructor(id, figura, posicion, color) {
        this.id = id
        this.figura = figura;
        this.posicion = posicion;
        this.color = color;
    }
     
 
}


function retirar(figura){

    var span = document.getElementsByTagName("span");

    for (let i = 0; i < span.length; i++) {
        if(span[i].textContent == figura ){
            span[i].remove();
        }
    }

}



function colocar(id, figura, posicion){
    var parent = document.getElementById(posicion);    
    var contenidoCelda = document.createElement("span");
    contenidoCelda.setAttribute('id', id);
    nombre = document.createTextNode(figura)
    parent.appendChild(contenidoCelda);
    contenidoCelda.appendChild(nombre)
}


var torrenegra1 = new Pieza('torre_negra_1', String.fromCharCode('9820'),'a8');
var torreblanca2 = new Pieza('torre_blanca_2', String.fromCharCode('9814'),'h1');
colocar(torrenegra1.id, torrenegra1.figura, torrenegra1.posicion);
colocar(torreblanca2.id, torreblanca2.figura, torreblanca2.posicion);
retirar(String.fromCharCode('9814'));

