var date = new Date();
var hora =  date.getHours();


if (hora < 12)
     document.write("Buenos días");
else if (hora < 20)
     document.write("Buenos tardes");
else
     document.write("Buenos noches");


