var nota = prompt("Dime una nota: ");


//document.write("Error : la nota no puede ser negativa o ser un carácter" + (nota))
/*
if (nota < 5){
    document.write("Suspenso")
}else if (nota >= 5 && nota <= 6) {
    document.write("Aprobado")
} else if(nota >= 7 && nota <= 8){
    document.write("Notable")
} else if(nota >= 9 && nota <= 10)
    document.write("Sobresaliente")
*/

var resultado = (nota < 5) ? document.write("Suspenso") : (nota >= 5 && nota <= 6) ? document.write("Aprobado") : 
                (nota >=7 && nota <=8) ? document.write("Notable") : (nota >= 9 && nota <=10) ? 
                document.write("Sobresaliente") : "Error : error inesperado";



