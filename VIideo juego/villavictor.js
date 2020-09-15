var vv = document.getElementById("villavictor");
var papel = vv.getContext("2d");

var fondo = {
  url: "tile.png",
  cargaOK: false
};

var vaca = {
  url: "vaca.png",
  cargaOK: false
};

var cerdo = {
  url: "cerdo.png",
  cargaOK: false
};

var pollo = {
  url: "pollo.png",
  cargaOK: false
};

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVacas);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdos);

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarPollos);

function cargarFondo()
{
  fondo.cargaOK = true;
  dibujar();
}
function cargarVacas()
{
  vaca.cargaOK = true;
  dibujar();
}

function cargarCerdos()
{
  cerdo.cargaOK = true;
  dibujar();
}

function cargarPollos()
{
  pollo.cargaOK = true;
  dibujar();
}

function dibujar()
{
  if(fondo.cargaOK)
  {
    papel.drawImage(fondo.imagen, 0, 0);
  }
  if(vaca.cargaOK)
  {
    var x = aleatorio (0, 420)
    var y = aleatorio (0, 420)
    papel.drawImage(vaca.imagen, x, y);
//      console.log("dibujo");
  }
  if(cerdo.cargaOK)
  {
    var x = aleatorio (0, 420)
    var y = aleatorio (0, 420)
    papel.drawImage(cerdo.imagen, x, y);
//    console.log("dibijo");
  }
  if(pollo.cargaOK)
  {
    var x = aleatorio (0, 420)
    var y = aleatorio (0, 420)
    papel.drawImage(pollo.imagen, x, y);
    console.log("dibijo2");
  }
}

function aleatorio(min, maxi)
{
  var resultado;
  resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
  return resultado;
}



//invoca el aleatorio
//var z;

//for(var i=0; i<10; i++)
//{
  //z = aleatorio(10, 20);
  //document.write(z + ", ");
//}
