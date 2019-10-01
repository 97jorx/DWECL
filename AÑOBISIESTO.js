var year = prompt("Dime un año");

if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0){
    document.write("BISIESTO");
}


