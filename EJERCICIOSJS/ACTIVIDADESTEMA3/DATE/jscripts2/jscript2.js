var nacDate = new Date(1997, 10, 30);  // 11 - 1 = 10
var hoy = new Date();
var nacMilisegundos = (hoy - nacDate) / 31556900000;
document.write(" Años --> " + nacMilisegundos + " Milisegundos --> " + (hoy - nacDate));
// 1 año -->  31556900000 Milisegundos