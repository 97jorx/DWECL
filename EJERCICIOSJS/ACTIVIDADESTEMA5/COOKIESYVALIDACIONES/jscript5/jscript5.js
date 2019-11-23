 
document.onkeypress = function(e){
    document.getElementById("DIV").style.backgroundColor = "#CCE6FF"
    document.getElementById("p2").innerHTML =
    "Caracter X: " + e.key;
    console.log("KEY")
}

document.onmousedown = function(){
    if (event.button != -1){
    document.getElementById("DIV").style.backgroundColor = "#FFFF00"
    console.log("MOUSE")
    }
}

document.body.onmouseenter = function(){
    document.getElementById("DIV").style.backgroundColor = "#FFFFFF"
    console.log("MOUSEenter")
}

document.onclick = function(e){
    document.getElementById("p").innerHTML =
    "Coordenada X: " + e.clientX + "Coordenada Y: " + e.clientY;
  }