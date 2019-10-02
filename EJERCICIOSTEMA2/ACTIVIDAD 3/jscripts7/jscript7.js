//Busca 3 casos de operaciones artiméticas que generen infinite y 3 casos que generen -Infinite.
var numerosGenerados = 0;

function getRandomInt(min, max) {
    //return Math.floor(Math.random() * (max - min)) + min;
    return parseInt(Math.random()*20);
  }

for (i = 0; i < 10; i++) {
    document.write("<br>"+getRandomInt(0,20));
  }

  