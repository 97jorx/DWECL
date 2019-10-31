

function addLi1() {
    ul = document.getElementById("lista");
    li = document.createElement("li");
    hijo = ul.children.length + 1
    li.setAttribute("id", hijo)
    li.appendChild(document.createTextNode(hijo));
    ul.appendChild(li)
}

function addLi() {
   var numelement = document.getElementById("i1").value;
    console.log(numelement);
    for (let i = 0; i < numelement; i++) {
        addLi1()
    }
}