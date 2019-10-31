

function addLi1() {
    ul = document.getElementById("lista"); // ID DE LA LISTA 
    li = document.createElement("li"); // CREAR UN ELEMENTO <li>
    hijo = ul.children.length + 1 // // LONGITUD DEL HIJO SOBRE EL PADRE ul
    li.setAttribute("id", hijo) // ASIGNAR ATRIBUTOS A CADA LISTA
    li.appendChild(document.createTextNode(hijo)); // CREAR EL TEXTO DE CADA HIJO
    ul.appendChild(li) // ESTABLECE EL PADRE PARA LA LISTA
}

function addLi() {
    var numelement = document.getElementById("i1").value;
    console.log(numelement);
    for (let i = 0; i < numelement; i++) {
        addLi1()        
    }
}


var multiplicar = num1 =>  num1 * 3;   
function triple() {   
    li = document.getElementById('lista').innerHTML;  
    for (let i = 0; li.length; i++) {
        console.log(multiplicar(li[i].innerHTML));    
    }
}   

