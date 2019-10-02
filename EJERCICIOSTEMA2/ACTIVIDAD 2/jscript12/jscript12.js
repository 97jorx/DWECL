console.log("Opción 1: Sumar")
console.log("Opción 2: Multiplicar")
console.log("Opción 3: Divir")
console.log("Opción 4: Restar")
console.log("Opción 5: Módulo")
console.log("Opción 6: Presiona 6 para salir")

var numero1 = 0;
var numero2 = 0;
var total = 0;

function calc(opt) {
	switch (opt) {
		case 1:
			preguntar();
			total = parseInt(numero1) + parseInt(numero2)
			alert(total.isNaN ? total :"Número incorrecto");
			break;
		case 2:
			preguntar();
			total = parseInt(numero1) + parseInt(numero2)
			alert(total.isNaN ? total :"Número incorrecto");
			break;
		case 3:
			preguntar();
			total = parseInt(numero1) + parseInt(numero2)
			alert(total.isNaN ? total :"Número incorrecto");
			break;
		case 4:
			preguntar();
			total = parseInt(numero1) + parseInt(numero2)
			alert(total.isNaN ? total :"Número incorrecto");
			break;
		case 5:
			preguntar();
			total = parseInt(numero1) + parseInt(numero2)
			alert(total.isNaN ? total :"Número incorrecto");
			break;
		case 6:
			var opcion = prompt("¿Quieres cerrar la ventana? S/N: ");
			if (opcion == "S") {
				windows.close();
			} else if (opcion == "N") {
				alert("Selecciona una opcion del menú");
			} else {
				alert("Opción incorrecta");
			}
			break;
		default: console.error("Numero desconocido"); break;
	}
}


function preguntar() {
	numero1 = prompt("Introduce el numero1");
	numero2 = prompt("Introduce el numero2");
}

