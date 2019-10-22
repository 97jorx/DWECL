var bol=true
while (bol) {
    var dev="Tienes que pasarme un numero ";
    var num = prompt("Introduce un numero : ");
    if (num % 2 == 0) {
        dev="El número introducido es par " + num;
    } else if(num % 2 == 1) {
        dev="El número introducido es impar " + num;
    }else if (num=="salir"){
        bol=false;
    }
    if (bol){
        alert(dev)
    }
    
}