

var c = document.getElementById("myCanvas");
var cuadrado = c.getContext("2d");
var y = 5;
var x = 5;
cuadrado.fillRect(x, y, 50, 50);

document.onkeydown = function (e) {

    switch (e.key) {
        case 'ArrowUp':
            if (y > 10) {
                cuadrado.clearRect(x, y, 500, 500);
                v = y -= 20;
                moverY(v);
            }
            break;
        case 'ArrowDown':
            if (y < 439) {
                cuadrado.clearRect(x, y, 500, 500);
                v = y += 20;
                moverY(v);
            }
            break;
        case 'ArrowLeft':
            if (x > 10) {
                cuadrado.clearRect(x, y, 500, 500);
                v = x -= 20;
                moverX(v);
            }
            break;
        case 'ArrowRight':
            if (x < 439) {
                cuadrado.clearRect(x, y, 500, 500);
                v = x += 20;
                moverX(v);
            }
            break;
    }

};


function moverY(valor) {
    cuadrado.beginPath();
    cuadrado.fillRect(x, valor, 50, 50);
    cuadrado.stroke();
}

function moverX(valor) {
    cuadrado.beginPath();
    cuadrado.fillRect(valor, y, 50, 50);
    cuadrado.stroke();
}