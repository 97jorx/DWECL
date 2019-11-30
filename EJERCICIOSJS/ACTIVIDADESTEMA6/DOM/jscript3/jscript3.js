var etiquetas = ['p', 'input', 'button', 'li']
var netiquetas = ['¿ Elemento a insertar ?',
                 'Añadir',
                 'Borrar nodos vacios', 
                 'Clonar ultimos nodos']


// PRIMER ELEMENTO DEL ARRAY
var firstTag = document.createElement(etiquetas[0]);
document.body.appendChild(firstTag);
var nameFirstTag = document.createTextNode(netiquetas[0])
firstTag.appendChild(nameFirstTag)

// SEGUNDO ELEMENTO DEL ARRAY
var input = document.createElement(etiquetas[1]);
firstTag.appendChild(input); 
input.setAttribute("id", "input1");


// TERCER ELEMENTO DEL ARRAY
for (let i = 1; i < 4; i++) {
  botones = document.createElement(etiquetas[2]);
  botones.setAttribute("id",`btn${i}`);
  nombreBtn = document.createTextNode(netiquetas[i]);
  firstTag.appendChild(botones); 
  botones.appendChild(nombreBtn);
}



// AÑADIR LI
document.getElementById("btn1").onclick = () => {
  var textInput = document.getElementById("input1").value;
  var li = document.createElement(etiquetas[3]);
  document.body.appendChild(li);
  var nli = document.createTextNode(textInput)
  li.appendChild(nli);
}

// BORRAR TODOS LOS NODOS VACIOS
document.getElementById("btn2").onclick = () => {
  var lista = document.getElementsByTagName('li');
  for (let i = 0; i < lista.length; i++) {
      lista[i].setAttribute("id",`li${i}`);
      if(lista[i].textContent == ''){
        lista[i--].remove();
      }
  }
}

// CLONAR TODOS LOS NODOS
document.getElementById("btn3").onclick = () => {
  var lista = document.getElementsByTagName('li');
  var clonado = lista[lista.length-1].cloneNode(true);
  document.body.appendChild(clonado);

}