var pro1 = prompt("Introduce el primer número");
var pro2 = prompt("Introduce el sgundo número");
var num1= parseInt(pro1);
var num2= parseInt(pro2);
var multiplos8 = "";

multiplos8=num1+ " ";
for(i=num1+1;i<num2;i++){
    if (i % 8 == 0){
        multiplos8 += i+" ";
    }
}
multiplos8+= num2;
alert(multiplos8);

